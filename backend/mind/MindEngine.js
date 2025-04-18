// 🔥 MindEngine.js – Part 1: Brain Ignition System

// --- Imports from the Cognitive Core ---
import {
    initMindCore,
    updateUserProfile,
    computeMood,
    adjustTone,
    getCognitiveState,
    coreSelfReflect,
    loadDNAProfile,
    logSessionData
  } from './MindCore.js';
  
  // --- Global Session Context ---
  const MasterXState = {
    userId: null,
    sessionId: null,
    dnaProfile: {},
    brainState: {},
    mood: 'neutral',
    tone: 'neutral',
    cognitiveSnapshot: {},
    systemReady: false
  };
  
  // --- Boot MindEngine ---
  export async function bootMindEngine({ userId, sessionId }) {
    console.log("\n🧠 Igniting MasterX...");
    MasterXState.userId = userId;
    MasterXState.sessionId = sessionId;
  
    try {
      // Step 1: Initialize Brain Core
      console.log("⚙️ Initializing MindCore...");
      MasterXState.brainState = await initMindCore(userId);
  
      // Step 2: Load DNA Profile
      console.log("🧬 Loading DNA Profile...");
      MasterXState.dnaProfile = await loadDNAProfile(userId);
  
      // Step 3: Update User Profile (goals, level, changes)
      console.log("📈 Syncing User Profile...");
      await updateUserProfile(userId);
  
      // Step 4: Compute Initial Mood
      console.log("🧪 Analyzing Mood...");
      MasterXState.mood = await computeMood(userId);
  
      // Step 5: Adjust Tone
      console.log("🎙️ Adjusting Tone...");
      MasterXState.tone = await adjustTone(MasterXState.mood, userId);
  
      // Step 6: Generate Cognitive Snapshot
      console.log("🔍 Capturing Cognitive Snapshot...");
      MasterXState.cognitiveSnapshot = await getCognitiveState(userId);
  
      // Step 7: Internal Self-Audit
      console.log("🧘 Running Self-Reflection Check...");
      const reflection = await coreSelfReflect(userId);
      if (!reflection.status) {
        console.warn("⚠️ Self-reflection failed. Engine halted.");
        MasterXState.systemReady = false;
        return;
      }
  
      // Step 8: Final Log
      console.log("✅ MasterX Ready! Cognitive Engine Initialized");
      MasterXState.systemReady = true;
      logStartupDiagnostics();
  
    } catch (err) {
      console.error("❌ Boot Error:", err);
      MasterXState.systemReady = false;
    }
  }
  
  // --- Log Startup Diagnostics ---
  function logStartupDiagnostics() {
    console.log("\n🧾 [DIAGNOSTICS]");
    console.log("User:", MasterXState.userId);
    console.log("Session:", MasterXState.sessionId);
    console.log("Mood:", MasterXState.mood);
    console.log("Tone:", MasterXState.tone);
    console.log("Snapshot:", JSON.stringify(MasterXState.cognitiveSnapshot, null, 2));
    console.log("System Ready:", MasterXState.systemReady);
  }
  
  // --- Future Hook: External Getters for UI ---
  export function getEngineState() {
    return MasterXState;
  }
  
  // --- Optional Trigger ---
  // bootMindEngine({ userId: 'ghost001', sessionId: 'alpha1' });

  










  // MindEngine.js

let engineState = {
    initialized: false,
    uptime: 0,
    startTime: null,
    lastHeartbeat: null,
    currentSessionId: null,
    currentMood: null,
    currentFocusLevel: null,
    toneProfile: "neutral",
    engineReady: false,
    memoryShardsLoaded: 0,
    sessionHistoryLength: 0,
    activeMission: null,
    ghostProfile: null,
    dnaProfile: null,
    version: "1.0.0-alpha",
    aiConfidence: 0.95,
    syncStatus: "unsynced",
    lastError: null,
    heartbeatInterval: null
  };
  
  /**
   * Initializes engine diagnostics
   */
  function initializeEngineDiagnostics({ ghostProfile, dnaProfile }) {
    engineState.initialized = true;
    engineState.startTime = Date.now();
    engineState.lastHeartbeat = Date.now();
    engineState.ghostProfile = ghostProfile;
    engineState.dnaProfile = dnaProfile;
    engineState.engineReady = true;
    engineState.currentSessionId = `session_${Date.now()}`;
    engineState.syncStatus = "synced";
    engineState.lastError = null;
    engineState.memoryShardsLoaded = ghostProfile?.memoryShards?.length || 0;
    engineState.sessionHistoryLength = ghostProfile?.history?.length || 0;
    engineState.activeMission = ghostProfile?.activeMission || null;
    engineState.currentMood = ghostProfile?.mood || "neutral";
    engineState.toneProfile = dnaProfile?.tone || "balanced";
    engineState.currentFocusLevel = ghostProfile?.focus || 0.7;
  }
  
  /**
   * Update internal clock
   */
  function updateEngineClock() {
    const now = Date.now();
    engineState.uptime = now - engineState.startTime;
    engineState.lastHeartbeat = now;
    return engineState.uptime;
  }
  
  /**
   * Retrieve system state snapshot
   */
  function getEngineState() {
    updateEngineClock();
  
    return {
      initialized: engineState.initialized,
      uptime: engineState.uptime,
      sessionId: engineState.currentSessionId,
      engineReady: engineState.engineReady,
      currentMood: engineState.currentMood,
      focus: engineState.currentFocusLevel,
      tone: engineState.toneProfile,
      version: engineState.version,
      memoryShardsLoaded: engineState.memoryShardsLoaded,
      sessionHistoryLength: engineState.sessionHistoryLength,
      lastHeartbeat: engineState.lastHeartbeat,
      syncStatus: engineState.syncStatus,
      aiConfidence: engineState.aiConfidence,
      activeMission: engineState.activeMission,
      lastError: engineState.lastError,
      ghostUsername: engineState.ghostProfile?.username || "Unknown",
      ghostLevel: engineState.ghostProfile?.level || "N/A",
      toneStyle: engineState.dnaProfile?.tone || "balanced",
      dopamineSensitivity: engineState.dnaProfile?.dopamine || "medium",
      decisionRate: engineState.dnaProfile?.decisionRate || 0.9,
      languageModel: engineState.dnaProfile?.llmPreference || "llama3",
      lastUpdated: new Date(engineState.lastHeartbeat).toISOString()
    };
  }
  
  /**
   * Hard refresh of the engine (used on crash or major goal change)
   */
  function rebootMindEngine({ preserveMemory = true } = {}) {
    const cachedGhost = preserveMemory ? engineState.ghostProfile : null;
    const cachedDNA = preserveMemory ? engineState.dnaProfile : null;
  
    engineState = {
      ...engineState,
      initialized: false,
      uptime: 0,
      startTime: null,
      lastHeartbeat: null,
      currentSessionId: null,
      currentMood: null,
      currentFocusLevel: null,
      engineReady: false,
      lastError: null,
      syncStatus: "unsynced"
    };
  
    if (preserveMemory) {
      initializeEngineDiagnostics({ ghostProfile: cachedGhost, dnaProfile: cachedDNA });
    }
  }
  
  /**
   * Manually inject mood & tone update (e.g. from mood tracker)
   */
  function setMoodAndTone({ mood, tone }) {
    if (mood) engineState.currentMood = mood;
    if (tone) engineState.toneProfile = tone;
    engineState.lastHeartbeat = Date.now();
  }
  
  /**
   * Export for use in session loop or core
   */
  module.exports = {
    initializeEngineDiagnostics,
    getEngineState,
    rebootMindEngine,
    updateEngineClock,
    setMoodAndTone
  };











// MindEngine.js

const fs = require("fs");

let clockDiagnostics = {
  ticks: [],
  totalUptime: 0,
  lastUptime: 0,
  sessionDurations: [],
  anomalies: [],
  focusFluctuations: [],
  maxFocus: 0,
  avgFocus: 0,
  deepFlowCount: 0,
  heartbeatLog: [],
  pulseStats: {
    peak: 0,
    low: Infinity,
    average: 0,
    count: 0
  },
  systemLoadPattern: [],
  lastSync: null
};

let engineState = {
  uptime: 0,
  startTime: null,
  lastHeartbeat: null,
  currentFocusLevel: 0.75
};

/**
 * Internal heartbeat generator – low-level loop monitor
 */
function internalHeartbeatPulse() {
  const now = Date.now();
  const elapsed = now - engineState.startTime;
  engineState.uptime = elapsed;
  engineState.lastHeartbeat = now;

  clockDiagnostics.ticks.push(now);
  clockDiagnostics.lastUptime = elapsed;
  clockDiagnostics.heartbeatLog.push({
    time: now,
    focus: engineState.currentFocusLevel
  });

  // Clean old ticks (>10k)
  if (clockDiagnostics.ticks.length > 10000) {
    clockDiagnostics.ticks.shift();
  }

  updatePulseStats(elapsed);
  detectFocusTrends();
  trackLoadSpike(elapsed);
}

/**
 * Aggregate engine pulse data
 */
function updatePulseStats(elapsed) {
  clockDiagnostics.pulseStats.peak = Math.max(clockDiagnostics.pulseStats.peak, elapsed);
  clockDiagnostics.pulseStats.low = Math.min(clockDiagnostics.pulseStats.low, elapsed);
  clockDiagnostics.pulseStats.total = (clockDiagnostics.pulseStats.total || 0) + elapsed;
  clockDiagnostics.pulseStats.count += 1;

  clockDiagnostics.pulseStats.average = (
    clockDiagnostics.pulseStats.total / clockDiagnostics.pulseStats.count
  ).toFixed(2);
}

/**
 * Detect long-term focus state shifts
 */
function detectFocusTrends() {
  const recent = engineState.currentFocusLevel;
  clockDiagnostics.focusFluctuations.push(recent);

  // Deep Flow Threshold
  if (recent > 0.85) {
    clockDiagnostics.deepFlowCount += 1;
  }

  if (recent > clockDiagnostics.maxFocus) {
    clockDiagnostics.maxFocus = recent;
  }

  // Limit logs
  if (clockDiagnostics.focusFluctuations.length > 5000) {
    clockDiagnostics.focusFluctuations.shift();
  }

  const total = clockDiagnostics.focusFluctuations.reduce((a, b) => a + b, 0);
  clockDiagnostics.avgFocus = (total / clockDiagnostics.focusFluctuations.length).toFixed(3);
}

/**
 * Check for abnormal uptime spikes
 */
function trackLoadSpike(elapsed) {
  const spikeDetected = elapsed > 5000000 || isNaN(elapsed);
  if (spikeDetected) {
    clockDiagnostics.anomalies.push({
      time: Date.now(),
      type: "uptime_spike",
      value: elapsed
    });
  }

  clockDiagnostics.systemLoadPattern.push(elapsed);
  if (clockDiagnostics.systemLoadPattern.length > 10000) {
    clockDiagnostics.systemLoadPattern.shift();
  }
}

/**
 * Main exported clock updater
 */
function updateEngineClock() {
  if (!engineState.startTime) {
    engineState.startTime = Date.now();
  }

  internalHeartbeatPulse();

  clockDiagnostics.totalUptime = engineState.uptime;
  clockDiagnostics.lastSync = Date.now();

  return {
    uptime: engineState.uptime,
    lastHeartbeat: engineState.lastHeartbeat,
    avgFocus: clockDiagnostics.avgFocus,
    totalDeepFlow: clockDiagnostics.deepFlowCount,
    sessionDiagnostics: clockDiagnostics.pulseStats
  };
}

/**
 * Optional: Save diagnostics to disk
 */
function exportClockDiagnostics(path = "./diagnostics/clock.json") {
  fs.writeFileSync(path, JSON.stringify(clockDiagnostics, null, 2));
}

module.exports = {
  updateEngineClock,
  exportClockDiagnostics
};
