// 🌀 SessionManager.js – Part 1: beginSessionLoop()

import {
    nextBestAction,
    logSessionData,
    dynamicFeedbackLoop,
    analyzeFocusPatterns,
    adjustTone,
    generatePromptSignature,
    simulateInnerDialogue,
    thinkLikeGhost,
    getCognitiveState
  } from '../mind/MindCore.js';
  
  import { getEngineState } from '../mind/MindEngine.js';
  
  const SessionLoopState = {
    loopActive: false,
    tickCount: 0,
    lastResponseTime: null,
    focusInterrupts: [],
    missionProgress: {},
    dopamineStreak: 0
  };
  
  // --- 🧠 Real-Time Learning Session Engine ---
  export async function beginSessionLoop() {
    const MasterX = getEngineState();
  
    if (!MasterX.systemReady) {
      console.error("🚫 Cannot start loop: MasterX engine not ready.");
      return;
    }
  
    console.log("\n🌀 Starting Session Loop for Ghost...");
    SessionLoopState.loopActive = true;
  
    while (SessionLoopState.loopActive) {
      try {
        SessionLoopState.tickCount++;
        const userId = MasterX.userId;
  
        // Step 1: Cognitive Sync
        const snapshot = await getCognitiveState(userId);
  
        // Step 2: Simulate Inner Thought
        await simulateInnerDialogue(userId, snapshot);
  
        // Step 3: Think Like Ghost
        const ghostified = await thinkLikeGhost(userId, snapshot);
  
        // Step 4: Compute Next Move
        const action = await nextBestAction({ userId, snapshot, ghostified });
        const promptSig = await generatePromptSignature(userId, action);
  
        // Step 5: Display / Act
        console.log("\n🧭 MasterX Action:", action.type);
        console.log("🗝️ Prompt Signature:", promptSig);
        console.log("🧾 Action Details:", action.details);
  
        // Step 6: Feedback Loop
        const feedback = await dynamicFeedbackLoop({
          userId,
          action,
          result: action.result || 'pending',
          tick: SessionLoopState.tickCount
        });
  
        // Step 7: Log Everything
        await logSessionData({
          userId,
          sessionId: MasterX.sessionId,
          tick: SessionLoopState.tickCount,
          action,
          feedback,
          mood: MasterX.mood,
          tone: MasterX.tone,
          timestamp: Date.now()
        });
  
        // Step 8: Monitor Attention
        const focus = await analyzeFocusPatterns(userId);
        if (focus?.interruptDetected) {
          SessionLoopState.focusInterrupts.push(focus);
          console.warn("⚠️ Distraction detected:", focus.reason);
        }
  
        // Step 9: Adjust Tone If Needed
        const newTone = await adjustTone(MasterX.mood, userId);
        if (newTone !== MasterX.tone) {
          MasterX.tone = newTone;
          console.log("🎙️ Tone shifted to:", newTone);
        }
  
        // Step 10: Wait for next tick (can be real-time events in future)
        await pauseLoop();
  
      } catch (err) {
        console.error("❌ Session Loop Error:", err);
        SessionLoopState.loopActive = false;
      }
    }
  }
  
  // --- Manual Interrupt ---
  export function stopSessionLoop() {
    SessionLoopState.loopActive = false;
    console.log("🛑 Session Loop stopped by user.");
  }
  
  // --- Artificial Pause Between Ticks (to simulate async behavior) ---
  function pauseLoop(duration = 1500) {
    return new Promise(resolve => setTimeout(resolve, duration));
  }
  
  // --- Hook to Get Current Loop State ---
  export function getSessionState() {
    return SessionLoopState;
  }







// SessionManager.js

const fs = require("fs");
const path = require("path");

const sessionLogPath = path.join(__dirname, "logs", "sessionLogs.json");

let sessionLogBuffer = [];
let SESSION_LIMIT = 1000;

/**
 * Structure for a single session log entry
 */
function createSessionLogEntry(data = {}) {
  const {
    timestamp = new Date().toISOString(),
    sessionId,
    action,
    userInput,
    systemResponse,
    dopamineSpike = 0,
    mood = "neutral",
    decisionPath = [],
    streak = 0,
    feedbackQuality = "neutral",
    tags = [],
    notes = "",
    interruption = false,
    focusScore = 0.7,
    thoughtVectors = [],
    error = null,
    insights = [],
    missionProgress = {}
  } = data;

  return {
    timestamp,
    sessionId,
    action,
    userInput,
    systemResponse,
    dopamineSpike,
    mood,
    decisionPath,
    streak,
    feedbackQuality,
    tags,
    notes,
    interruption,
    focusScore,
    thoughtVectors,
    error,
    insights,
    missionProgress
  };
}

/**
 * Logs session data into buffer and disk (rotating)
 */
function logSessionData(data) {
  const logEntry = createSessionLogEntry(data);
  sessionLogBuffer.push(logEntry);

  // Rotate if too big
  if (sessionLogBuffer.length > SESSION_LIMIT) {
    sessionLogBuffer.shift();
  }

  try {
    const logDir = path.dirname(sessionLogPath);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    fs.writeFileSync(sessionLogPath, JSON.stringify(sessionLogBuffer, null, 2));
  } catch (err) {
    console.error("[logSessionData] Failed to write logs:", err.message);
  }
}

/**
 * Retrieve recent logs (for debugging, UI replay, etc.)
 */
function getRecentSessionLogs(limit = 50) {
  return sessionLogBuffer.slice(-limit);
}

/**
 * Search log entries by tag or keyword
 */
function searchSessionLogs(keyword) {
  return sessionLogBuffer.filter((entry) =>
    JSON.stringify(entry).toLowerCase().includes(keyword.toLowerCase())
  );
}

/**
 * Group logs by mood, tag, or spike event
 */
function groupSessionLogsBy(filter = "mood") {
  const grouped = {};

  sessionLogBuffer.forEach((entry) => {
    const key = entry[filter] || "unknown";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(entry);
  });

  return grouped;
}

/**
 * Export full session log archive
 */
function exportSessionLogs(filePath = "./logs/session_archive.json") {
  try {
    fs.writeFileSync(filePath, JSON.stringify(sessionLogBuffer, null, 2));
    console.log(`[logSessionData] Session log archive saved to ${filePath}`);
  } catch (e) {
    console.error("[exportSessionLogs] Error:", e.message);
  }
}

/**
 * Clear logs when needed (resets buffer)
 */
function clearSessionLogs() {
  sessionLogBuffer = [];
  try {
    if (fs.existsSync(sessionLogPath)) {
      fs.unlinkSync(sessionLogPath);
    }
  } catch (e) {
    console.error("[clearSessionLogs] Failed to clear logs:", e.message);
  }
}

module.exports = {
  logSessionData,
  getRecentSessionLogs,
  searchSessionLogs,
  groupSessionLogsBy,
  exportSessionLogs,
  clearSessionLogs
};









// SessionManager.js

const {
  logSessionData,
  getRecentSessionLogs
} = require("./SessionManager.js");
const {
  computeMood,
  adjustTone,
  nextBestAction,
  dynamicFeedbackLoop,
  thinkLikeGhost,
  coreSelfReflect
} = require("../mind/MindCore.js");
const { updateEngineClock } = require("../mind/MindEngine.js");

let activeSession = null;
let SESSION_TICK_MS = 4000;

/**
 * Bootstraps and launches the session loop
 */
function beginSessionLoop(userProfile) {
  console.log(`🧠 Session initialized for: ${userProfile.name}`);
  updateEngineClock();

  activeSession = {
    sessionId: generateSessionId(),
    startTime: Date.now(),
    userProfile,
    mood: "neutral",
    tickCount: 0,
    streak: 0
  };

  const interval = setInterval(async () => {
    activeSession.tickCount++;
    updateEngineClock();

    console.log(`\n🌀 Tick ${activeSession.tickCount}...`);

    // 1. Compute mood
    const mood = computeMood(userProfile);
    activeSession.mood = mood;

    // 2. Adjust tone
    const tone = adjustTone(mood, userProfile);

    // 3. Think like Ghost
    const ghostAdapt = thinkLikeGhost(userProfile);

    // 4. Self-reflect
    const audit = coreSelfReflect({
      tick: activeSession.tickCount,
      mood,
      tone,
      profile: userProfile
    });

    // 5. Choose next action
    const nextAction = await nextBestAction({
      session: activeSession,
      mood,
      tone
    });

    // 6. Simulate output (UI/console/LLM)
    const simulatedResponse = `[Action] ${nextAction.description}`;

    // 7. Log full decision data
    logSessionData({
      sessionId: activeSession.sessionId,
      action: nextAction.name,
      userInput: ghostAdapt.lastInput || "",
      systemResponse: simulatedResponse,
      mood,
      streak: activeSession.streak,
      feedbackQuality: tone.feedbackQuality,
      notes: audit.notes,
      focusScore: audit.focusScore,
      decisionPath: nextAction.path,
      dopamineSpike: nextAction.dopamineValue,
      missionProgress: nextAction.missionLink
    });

    // 8. Dynamic feedback
    const feedback = dynamicFeedbackLoop({
      session: activeSession,
      feedbackQuality: tone.feedbackQuality,
      actionTaken: nextAction
    });

    console.log(`🗣️ Feedback: ${feedback.message}`);

    if (activeSession.tickCount >= 10) {
      console.log("⏹️ Ending session after 10 ticks.");
      clearInterval(interval);
    }
  }, SESSION_TICK_MS);
}

/**
 * Random but unique session ID generator
 */
function generateSessionId() {
  return "S-" + Math.random().toString(36).substring(2, 12).toUpperCase();
}

module.exports = {
  beginSessionLoop
};
