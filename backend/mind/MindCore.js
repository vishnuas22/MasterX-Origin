// 🔢	Function	Role
// 1.	initMindCore()	Boot the internal brain, load memory shards, set initial user state 🥰
// 2.	updateUserProfile()	Track evolving skills, goals, session behavior 😀
// 3.	computeMood()	Analyze user energy/mood via behavior + time heuristics 😀
// 4.	adjustTone()	Modify feedback tone based on current mood 😀
// 5.	nextBestAction()	Decide next best step using cognitive state + history😀
// 6.	logSessionData()	Log mistakes, wins, dopamine spikes — everything😀
// 7.	analyzeFocusPatterns()	Detect flow states, burnout, distraction patterns 😀
// 8.	coreSelfReflect()	Internal recursive self-check: “Am I helping Ghost right now?”😀
// 9.	getCognitiveState()	Return full mind snapshot (for UI, LLM prompts, rewards) 😅
// 10.	dynamicFeedbackLoop()	Adjust session feedback based on completion, mood, time 😀
// 11.	missionStateEngine()	Track long-term quests, success/fail streaks 😀

// 12.	generatePromptSignature()	Tag each LLM prompt with a behavioral fingerprint 😀
// 13.	loadDNAProfile()	Core preferences: tone, dopamine cycle, memory decay😀
// 14.	saveBrainState()	Save/export internal mind state for backup/resume 😀
// 15.	simulateInnerDialogue()	Self-dialogue: challenge vs support vs motivate 😀
// 16.	thinkLikeGhost()	Temporarily adopt Ghost’s mindset and reactions 😀

// MindCore.js

// --- MasterX: MindCore Engine ---
// Ultra-intelligent brain bootloader function
// Ghost's personal AGI monk mentor core

export function initMindCore(config = {}) {
    const defaultConfig = {
      memoryShardsPath: './memory/shards/',
      userProfilePath: './memory/userProfile.json',
      dnaProfilePath: './memory/dna.json',
      logsPath: './logs/sessions/',
      sessionId: `session_${Date.now()}`,
      maxMemoryShards: 50,
      defaultTone: 'mentor',
      systemGoals: ['upskill_user', 'monitor_focus', 'adjust_learning'],
      autoSave: true,
      debug: false,
    };
  
    const state = {
      config: { ...defaultConfig, ...config },
      brainState: {},
      userProfile: {},
      dnaProfile: {},
      sessionLog: [],
      moodState: {
        energy: 0.8,
        focus: 0.75,
        mood: 'neutral',
        lastMoodUpdate: Date.now(),
      },
      focusPatterns: {
        streak: 0,
        lastBreak: null,
        flowMoments: [],
      },
      promptSignatures: [],
      systemStats: {
        initTime: Date.now(),
        updateCount: 0,
      },
    };
  
    // 🧬 Step 1: Load Memory Shards
    const fs = require('fs');
    const path = require('path');
  
    function loadMemoryShards() {
      const dir = state.config.memoryShardsPath;
      if (!fs.existsSync(dir)) return;
  
      const files = fs.readdirSync(dir).slice(0, state.config.maxMemoryShards);
      state.brainState.memoryShards = files.map(file => {
        try {
          const shard = fs.readFileSync(path.join(dir, file), 'utf-8');
          return JSON.parse(shard);
        } catch (err) {
          console.warn(`❌ Failed to load memory shard ${file}`);
          return null;
        }
      }).filter(Boolean);
  
      if (state.config.debug)
        console.log(`🧠 Loaded ${state.brainState.memoryShards.length} memory shards`);
    }
  
    // 🧍‍♂️ Step 2: Load User Profile
    function loadUserProfile() {
      const userPath = state.config.userProfilePath;
      if (!fs.existsSync(userPath)) return;
  
      try {
        const profile = fs.readFileSync(userPath, 'utf-8');
        state.userProfile = JSON.parse(profile);
      } catch (err) {
        console.warn('❌ Failed to load user profile');
      }
    }
  
    // 🧬 Step 3: Load DNA Profile (Meta Preferences)
    function loadDNAProfile() {
      const dnaPath = state.config.dnaProfilePath;
      if (!fs.existsSync(dnaPath)) return;
  
      try {
        const dna = fs.readFileSync(dnaPath, 'utf-8');
        state.dnaProfile = JSON.parse(dna);
      } catch (err) {
        console.warn('❌ Failed to load DNA profile');
      }
    }
  
    // 🔐 Step 4: Setup Logs and Boot Session
    function initSessionLog() {
      const logEntry = {
        sessionId: state.config.sessionId,
        timestamp: new Date().toISOString(),
        actions: [],
        mood: state.moodState,
        goals: state.config.systemGoals,
      };
      state.sessionLog.push(logEntry);
    }
  
    // 📣 Step 5: Boot Message + System Tone
    function bootMessage() {
      console.log(`
        🔥 MasterX MindCore Initialized
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        🧠 Session: ${state.config.sessionId}
        📚 Shards: ${state.brainState.memoryShards?.length || 0}
        👤 User: ${state.userProfile.name || 'Unknown'}
        🧬 Tone: ${state.config.defaultTone}
        🧭 Goals: ${state.config.systemGoals.join(', ')}
      `);
    }
  
    // ♻️ Step 6: Autosave Brain State
    function saveBrainState() {
      const brainDump = {
        state,
        timestamp: Date.now(),
      };
  
      const savePath = `./memory/saves/${state.config.sessionId}_brain.json`;
      try {
        fs.writeFileSync(savePath, JSON.stringify(brainDump, null, 2));
        if (state.config.debug) console.log(`💾 Brain state saved to ${savePath}`);
      } catch (err) {
        console.error('❌ Failed to save brain state:', err);
      }
    }
  
    // 🌀 Step 7: Return MindCore Interface
    const mindCoreAPI = {
      getState: () => state,
      updateConfig: (newConfig) => Object.assign(state.config, newConfig),
      saveBrainState,
      reloadProfiles: () => {
        loadUserProfile();
        loadDNAProfile();
      },
      reloadMemory: () => loadMemoryShards(),
      logAction: (action) => {
        state.sessionLog[state.sessionLog.length - 1]?.actions.push({
          timestamp: Date.now(),
          ...action,
        });
      },
    };
  
    // 💡 Boot it all
    loadMemoryShards();
    loadUserProfile();
    loadDNAProfile();
    initSessionLog();
    bootMessage();
  
    if (state.config.autoSave) saveBrainState();
  
    return mindCoreAPI;
  }
  




// ================================
// 🧠 MASTERX CORE: MIND ENGINE
// Function: initMindCore(), updateUserProfile()
// File: MindCore.js
// Purpose: Boot the internal AGI brain + User Behavior Tracking
// ================================

// === ⚙️ Imports ===
import { loadLocalMemory, saveLocalMemory } from './MemoryShard.js';
import { getCurrentTime, getUserTimezone, generateUUID } from './TimeUtils.js';
import { defaultUserProfile, defaultDNAProfile } from './Defaults.js';

// === 🧠 Core Brain Variables ===
let brainState = {};
let userProfile = {};
let moodState = {};
let focusMetrics = {};
let sessionLog = [];
let dnaProfile = {};

// === 🔥 initMindCore() Function ===
export function initMindCore(config = {}) {
  console.log("[⚡] Initializing MasterX MindCore...");

  // Step 1: Load Brain Memory
  const memory = loadLocalMemory();
  brainState = memory?.brainState || {};
  userProfile = memory?.userProfile || structuredClone(defaultUserProfile);
  dnaProfile = memory?.dnaProfile || structuredClone(defaultDNAProfile);
  focusMetrics = memory?.focusMetrics || {
    focusSessions: [],
    distractions: 0,
    streaks: 0
  };
  sessionLog = memory?.sessionLog || [];

  // Step 2: Generate Session ID + Timestamps
  brainState.sessionId = generateUUID();
  brainState.startTime = getCurrentTime();
  brainState.timezone = getUserTimezone();

  // Step 3: Load Initial MoodState
  moodState = {
    energyLevel: 0.85,  // float 0-1
    emotion: 'neutral',
    motivationScore: 0.8,  // float 0-1
    moodTrend: 'stable'
  };

  // Step 4: Log Boot Message
  sessionLog.push({
    type: 'system',
    message: 'MindCore initialized',
    timestamp: brainState.startTime,
    sessionId: brainState.sessionId
  });

  // Step 5: Prepare Initial Signature
  brainState.signature = {
    fingerprint: `${userProfile.name}_${Date.now()}`,
    tone: 'supportive',
    mindset: 'growth',
    challengeLevel: 'moderate',
    activeModels: []
  };

  // Step 6: Internal Clocks & Runtime Loop (stubbed for now)
  brainState.runtime = {
    ticks: 0,
    uptime: 0,
    idleTime: 0,
    engagementScore: 0
  };

  // Step 7: Boot Status Output
  console.table({
    sessionId: brainState.sessionId,
    user: userProfile.name,
    timezone: brainState.timezone,
    energy: moodState.energyLevel,
    tone: brainState.signature.tone
  });

  console.log("[✅] MasterX MindCore booted successfully.\n");

  // Step 8: Save BrainState Snapshot
  saveLocalMemory({
    brainState,
    userProfile,
    dnaProfile,
    moodState,
    focusMetrics,
    sessionLog
  });

  return {
    brainState,
    userProfile,
    dnaProfile,
    moodState,
    focusMetrics,
    sessionLog
  };
}

// === 🔁 updateUserProfile() Function ===
export function updateUserProfile(updates = {}) {
  console.log("[🔄] Updating user profile...");

  const timestamp = getCurrentTime();
  const changes = {};

  // Step 1: Validate and Apply Changes
  for (const key in updates) {
    if (userProfile.hasOwnProperty(key)) {
      const oldVal = userProfile[key];
      const newVal = updates[key];
      if (oldVal !== newVal) {
        changes[key] = { from: oldVal, to: newVal };
        userProfile[key] = newVal;
      }
    } else {
      // Add new custom fields
      userProfile[key] = updates[key];
      changes[key] = { from: undefined, to: updates[key] };
    }
  }

  // Step 2: Record Changes into Session Log
  if (Object.keys(changes).length > 0) {
    sessionLog.push({
      type: 'user-update',
      timestamp,
      changes
    });
  }

  // Step 3: Update Skill Map
  if (updates.skills) {
    if (!Array.isArray(userProfile.skills)) userProfile.skills = [];
    updates.skills.forEach(skill => {
      if (!userProfile.skills.includes(skill)) {
        userProfile.skills.push(skill);
      }
    });
  }

  // Step 4: Adjust Learning Preferences
  if (updates.learningStyle || updates.goalPriority) {
    brainState.signature.mindset = updates.learningStyle || brainState.signature.mindset;
    brainState.signature.challengeLevel = updates.goalPriority || brainState.signature.challengeLevel;
  }

  // Step 5: Save Updated State
  saveLocalMemory({
    brainState,
    userProfile,
    dnaProfile,
    moodState,
    focusMetrics,
    sessionLog
  });

  // Step 6: Feedback
  console.log("[✅] User profile updated with:", changes);
  return userProfile;
}






// adjustTone(): Rewrites or enhances response message style based on cognitive state

export function adjustTone(state, rawMessage) {
    const { mood, focus } = state.moodState;
    const { preferredTone, name, learningStyle, pushThreshold } = state.profile;
  
    const toneMap = {
      energized: 'coach',
      focused: 'zen',
      neutral: preferredTone || 'mentor',
      tired: 'gentle',
      burned_out: 'whisper'
    };
  
    const tone = toneMap[mood] || 'mentor';
  
    // 🔁 Message Rewriting Strategies
    const transformers = {
      coach: msg => addEnergy(msg, name),
      zen: msg => addClarity(msg),
      mentor: msg => formatMentorVoice(msg),
      gentle: msg => addSoftness(msg),
      whisper: msg => makeMinimal(msg)
    };
  
    const transformer = transformers[tone] || (msg => msg);
    const tunedMessage = transformer(rawMessage);
  
    if (state.config.debug) {
      console.log(`[TONE] Mood: ${mood} → Tone: ${tone}`);
    }
  
    return tunedMessage;
  
    // ===============================
    // 🎨 Tone Styling Transformers
    // ===============================
  
    function addEnergy(msg, name) {
      return `🔥 Let’s go, ${name}! ${msg} You’re on a roll! 💪`;
    }
  
    function addClarity(msg) {
      return msg
        .replace(/too complicated/gi, 'let’s simplify that')
        .replace(/\bperhaps\b/gi, 'clearly')
        .replace(/maybe/gi, 'with focus');
    }
  
    function formatMentorVoice(msg) {
      return `🧠 Here's something to chew on: ${msg} Keep growing, always.`;
    }
  
    function addSoftness(msg) {
      return `💫 Take a breath. ${msg} We're not in a rush. Small steps count.`;
    }
  
    function makeMinimal(msg) {
      return `${msg.split('.')[0]}. 🫧 (Let’s pause and recover.)`;
    }
  }

  





// dynamicFeedbackLoop(): Recalibrates user feedback dynamically in real time

export function dynamicFeedbackLoop(state, rawFeedback) {
    const { moodState, sessionStats, profile } = state;
    const { mood, energyLevel } = moodState;
    const { streak, fails, startTime, completions } = sessionStats;
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 60000); // in minutes
  
    let feedback = rawFeedback;
  
    // ⏱️ Time-based feedback
    if (elapsed > 60) {
      feedback += " 🕒 You've been grinding for over an hour. Impressive! Consider a short break?";
    } else if (elapsed > 25 && mood === "tired") {
      feedback += " 😌 Let’s take a few mindful breaths. Rest sharpens the blade.";
    }
  
    // 📉 Struggle detection
    if (fails >= 3 && mood !== "energized") {
      feedback += " 🌱 Mistakes are part of mastery. Want a simplified path?";
    }
  
    // 📈 Completion momentum
    if (completions > 4 && streak >= 3) {
      feedback += " 🔥 You're in flow. Ready for a deeper challenge?";
    }
  
    // 🎯 Focus state detection
    if (mood === "focused" && streak >= 2) {
      feedback += " 🧠 You’re dialed in. Let’s unlock the next layer of your potential.";
    }
  
    // 🛑 Burnout pre-warning
    if (mood === "burned_out" || energyLevel < 2) {
      feedback += " ⚠️ You might be pushing too hard. Let’s save your energy for tomorrow’s win.";
    }
  
    // 🎮 Gamified dopamine push
    feedback += getDopaminePulse(mood, streak, fails);
  
    // 📚 Tone styling based on profile
    feedback = styleByProfile(feedback, profile);
  
    if (state.config.debug) {
      console.log(`[FEEDBACK LOOP] Feedback adjusted @ ${elapsed}min, mood=${mood}, streak=${streak}`);
    }
  
    return feedback;
  
    // ================================
    // 💊 Helper Functions
    // ================================
  
    function getDopaminePulse(mood, streak, fails) {
      const tag = `💡`;
  
      if (streak >= 5) return ` ${tag} You’ve triggered a hot streak! Let’s keep it alive! 🚀`;
      if (fails >= 5) return ` ${tag} You're in a learning spike. Time for a brain stretch 🧠`;
  
      if (mood === "energized") return ` ${tag} Power level rising. Channel it wisely.`;
      if (mood === "tired") return ` ${tag} Let’s recharge. Even monks need rest.`;
      if (mood === "neutral") return ` ${tag} You’re steady. That’s powerful.`;
  
      return "";
    }
  
    function styleByProfile(msg, profile) {
      const { preferredTone, name } = profile;
      if (preferredTone === "coach") return `💥 ${name}, here's the play: ${msg}`;
      if (preferredTone === "gentle") return `🌸 Hey ${name}, softly now: ${msg}`;
      return msg;
    }
  }

  








  // nextBestAction(): Determines the optimal next action based on user's state

export function nextBestAction(state) {
    const { moodState, sessionStats, profile, goalTree } = state;
    const { energyLevel, mood } = moodState;
    const { streak, fails, completions, currentTopic } = sessionStats;
  
    const focus = evaluateFocus(state);
    const priorityGoal = getTopGoal(goalTree);
    const suggestions = [];
  
    const action = {
      type: "lesson",
      id: null,
      intent: "continue",
      reason: "",
      suggestions: [],
    };
  
    // 🎯 Rule 1: Handle Burnout
    if (energyLevel < 2 && (mood === "burned_out" || fails > 4)) {
      action.type = "pause";
      action.intent = "rest";
      action.reason = "Energy critically low. Suggesting recovery loop.";
      action.suggestions.push("🔄 Enter reflection or breathing session");
      return action;
    }
  
    // 🔁 Rule 2: Loop back if stuck
    if (fails >= 3 && streak < 2) {
      action.type = "review";
      action.intent = "rewind";
      action.reason = "User struggling with recent topics.";
      action.id = getPreviousLesson(currentTopic);
      action.suggestions.push("⬅️ Let's revisit the key concept");
      return action;
    }
  
    // 🔥 Rule 3: Flow state detected
    if (mood === "focused" && streak >= 4) {
      action.type = "challenge";
      action.intent = "push";
      action.reason = "User in flow. Amplifying difficulty.";
      action.id = getAdvancedChallenge(currentTopic);
      action.suggestions.push("⚔️ Next-level challenge awaits.");
      return action;
    }
  
    // 🌟 Rule 4: Time for exploration
    if (mood === "curious" || profile.explorerMode) {
      action.type = "explore";
      action.intent = "expand";
      action.reason = "Curiosity spike detected.";
      action.id = getNewTopicFromGoal(priorityGoal);
      action.suggestions.push("🚀 Let’s discover a new area.");
      return action;
    }
  
    // ✅ Rule 5: Default progression
    action.id = getNextLesson(currentTopic, goalTree);
    action.reason = "Continuing default progression path.";
    action.suggestions.push("📘 Proceeding based on path design.");
  
    return action;
  
    // ========================
    // 🧩 Helper Functions
    // ========================
  
    function evaluateFocus(state) {
      const { streak, focusInterrupts, timeOnTask } = state.sessionStats;
      if (streak >= 3 && timeOnTask > 20 && focusInterrupts === 0) return "flow";
      if (focusInterrupts > 3 || timeOnTask < 5) return "scattered";
      return "steady";
    }
  
    function getTopGoal(tree) {
      const sorted = Object.values(tree).sort((a, b) => b.priority - a.priority);
      return sorted[0];
    }
  
    function getNextLesson(current, goalTree) {
      const topic = goalTree[current.topic] || {};
      return topic.subtopics?.[current.index + 1] || "core-reflection";
    }
  
    function getPreviousLesson(current) {
      const idx = Math.max(current.index - 1, 0);
      return `lesson-${current.topic}-${idx}`;
    }
  
    function getAdvancedChallenge(topic) {
      return `challenge-${topic}-hardcore`;
    }
  
    function getNewTopicFromGoal(goal) {
      return goal?.relatedTopics?.[0] || "explore-mind-expansion";
    }
  }

  


// coreSelfReflect(): MasterX's internal self-audit system

export function coreSelfReflect(state, logs) {
    const { userProfile, moodState, sessionStats, feedbackHistory } = state;
  
    const reflection = {
      insights: [],
      decisions: [],
      warnings: [],
      confidenceScore: 0.0,
      actionsTaken: [],
      needsToneShift: false,
      needsPaceAdjustment: false
    };
  
    // 🧪 Audit 1: Guidance relevance
    const recentLessons = logs.recentLessons.slice(-3);
    if (!isContentRelevant(userProfile, recentLessons)) {
      reflection.insights.push("🔍 Lessons may not be matching current skill/growth trajectory.");
      reflection.decisions.push("📌 Mark for rerouting.");
      reflection.confidenceScore -= 0.2;
    } else {
      reflection.insights.push("✅ Content relevance confirmed.");
      reflection.confidenceScore += 0.2;
    }
  
    // 📊 Audit 2: Cognitive clarity check
    const misunderstood = logs.misunderstoodConcepts.length;
    if (misunderstood >= 2) {
      reflection.insights.push(`⚠️ Detected ${misunderstood} unclear concepts.`);
      reflection.decisions.push("🧠 Trigger clarification mode.");
      reflection.warnings.push("Consider re-explaining key topics.");
      reflection.confidenceScore -= 0.3;
      reflection.needsPaceAdjustment = true;
    }
  
    // 🎯 Audit 3: Goal alignment
    const goalMismatch = checkGoalMisalignment(userProfile, sessionStats);
    if (goalMismatch) {
      reflection.insights.push("🚨 Goal and session actions are misaligned.");
      reflection.decisions.push("📌 Recalculate learning path.");
      reflection.confidenceScore -= 0.2;
    }
  
    // 🧘 Audit 4: Tone fit
    if (toneMismatch(userProfile, moodState, logs)) {
      reflection.insights.push("🎭 Tone may not match user’s current mental state.");
      reflection.needsToneShift = true;
      reflection.decisions.push("🌀 Initiate tone recalibration.");
      reflection.confidenceScore -= 0.15;
    }
  
    // 🔁 Audit 5: Feedback loop health
    const recentFeedback = feedbackHistory.slice(-5);
    const flatFeedback = recentFeedback.every(fb => fb.score < 3);
    if (flatFeedback) {
      reflection.insights.push("📉 Consistently low feedback detected.");
      reflection.decisions.push("⚙️ Adjust lesson format or depth.");
      reflection.confidenceScore -= 0.25;
    } else {
      reflection.confidenceScore += 0.15;
    }
  
    // 📈 Final score normalization
    reflection.confidenceScore = Math.max(0, Math.min(1, reflection.confidenceScore));
  
    return reflection;
  
    // =========================
    // 🧩 Internal Helpers
    // =========================
  
    function isContentRelevant(profile, lessons) {
      return lessons.every(lesson => lesson.skillTag === profile.currentSkill || lesson.relatedTo.includes(profile.currentGoal));
    }
  
    function checkGoalMisalignment(profile, stats) {
      const lastGoal = profile.currentGoal;
      const topicDrift = stats.currentTopic !== lastGoal?.coreTopic;
      return topicDrift;
    }
  
    function toneMismatch(profile, mood, logs) {
      const lastTone = logs.lastToneUsed;
      if (mood.energyLevel <= 2 && lastTone === "hype") return true;
      if (mood.mood === "frustrated" && lastTone === "playful") return true;
      return false;
    }
  }









// simulateInnerDialogue(): MasterX's inner voice simulation engine

export function simulateInnerDialogue(userState, systemState) {
    const { moodState, focusLevel, frustrationScore, profile, lastLessonOutcome } = userState;
    const { previousDecision, recentToneAdjustments, reflection } = systemState;
  
    // Dialogue actors: Inner personas of MasterX
    const innerVoices = {
      Challenger: {
        mindset: "Push the limits, challenge the user, build resilience.",
        recommendAction: () => {
          return {
            tone: "bold",
            lessonDepth: "advanced",
            type: "problem-solving",
            message: "Let’s see what you’re truly capable of, Ghost."
          };
        }
      },
      Guide: {
        mindset: "Support progress gently, clarify confusion, reduce stress.",
        recommendAction: () => {
          return {
            tone: "calm",
            lessonDepth: "intermediate",
            type: "explainer",
            message: "Let’s slow it down and master this piece together."
          };
        }
      },
      Strategist: {
        mindset: "Balance user progress with mood, dopamine, retention metrics.",
        recommendAction: () => {
          const risk = frustrationScore > 0.5 ? "low" : "medium";
          return {
            tone: risk === "low" ? "encouraging" : "neutral",
            lessonDepth: "adaptive",
            type: "feedback",
            message: risk === "low"
              ? "Nice pace! Let’s level it up slightly."
              : "Time for a small reset to refocus our path."
          };
        }
      }
    };
  
    // Simulation roundtable
    const dialogue = [];
  
    Object.entries(innerVoices).forEach(([name, voice]) => {
      const simulated = voice.recommendAction();
      dialogue.push({
        voice: name,
        mindset: voice.mindset,
        action: simulated
      });
    });
  
    // 🧠 Decision: Choose the best persona’s response
    const selected = chooseBestDialogue(dialogue, userState, systemState);
  
    return {
      dialogueLog: dialogue,
      chosenAction: selected
    };
  
    // =========================
    // 🧩 Internal Helpers
    // =========================
  
    function chooseBestDialogue(dialogueOptions, user, system) {
      // Decision logic based on mood and frustration
      if (user.moodState.mood === "frustrated" || user.frustrationScore > 0.7) {
        return dialogueOptions.find(d => d.voice === "Guide").action;
      }
  
      if (user.focusLevel >= 0.8 && lastLessonOutcome === "success") {
        return dialogueOptions.find(d => d.voice === "Challenger").action;
      }
  
      return dialogueOptions.find(d => d.voice === "Strategist").action;
    }
  }









// thinkLikeGhost(): Temporary mind alignment with Ghost’s perspective

export function thinkLikeGhost(userProfile, sessionHistory, moodEngine, learningFlow) {
    const {
      mentalModels,
      pastMotivators,
      frustrationTriggers,
      preferredModes, // visual/audio/text/code
      reflectionPatterns
    } = userProfile;
  
    const recentStreak = sessionHistory.slice(-5);
    const currentMood = moodEngine.getCurrentMood();
    const currentFocus = moodEngine.getFocusScore();
    const dopamineLevel = moodEngine.estimateDopamine();
    const currentFlowState = learningFlow.getFlowMetrics();
  
    // 🧠 Composite Mindprint
    const ghostMindState = {
      focus: currentFocus,
      mood: currentMood,
      dopamine: dopamineLevel,
      thinkingStyle: inferThinkingStyle(),
      preferredPace: determinePacing(),
      riskOfBurnout: detectBurnout(),
      attentionAnchor: generateMentalAnchor()
    };
  
    return ghostMindState;
  
    // =====================
    // 🧩 Internal ThinkOps
    // =====================
  
    function inferThinkingStyle() {
      // Derive current dominant style based on history and mood
      if (mentalModels.includes("visual") && currentFocus < 0.5) {
        return "visual-explainer";
      }
      if (mentalModels.includes("stepwise") && dopamineLevel > 0.7) {
        return "logic-stacker";
      }
      if (mentalModels.includes("analogy") && currentMood === "inspired") {
        return "story-analogy";
      }
      return "neutral-mixed";
    }
  
    function determinePacing() {
      // Adjust lesson pace using recent streak and dopamine levels
      const avgTime = recentStreak.map(s => s.duration).reduce((a, b) => a + b, 0) / recentStreak.length;
      if (dopamineLevel < 0.4 || avgTime > 600) return "slow-nudge";
      if (dopamineLevel > 0.8 && currentFlowState.inFlow) return "hyper-focus";
      return "steady";
    }
  
    function detectBurnout() {
      const frustrationPeaks = recentStreak.filter(s => s.frustration > 0.6);
      return frustrationPeaks.length >= 3;
    }
  
    function generateMentalAnchor() {
      // Create a metaphor/meme/pattern reminder based on mood & history
      if (currentMood === "reflective") return "🪞 ‘You’ve climbed this mountain before.’";
      if (currentMood === "bored") return "🎮 ‘Let’s gamify this... Bonus round?’";
      if (currentMood === "curious") return "🔍 ‘What if this was the missing key?’";
      return "🚀 ‘One step closer to Mastery.’";
    }
  }







  // 🧠 MindCore.js – The Cognitive Core of MasterX
// --- Function: logSessionData() ---
// Description: Logs all cognitive interactions for analysis and memory training.

const sessionLog = [];

function logSessionData({
  action = "unknown_action",
  input = "",
  output = "",
  timestamp = new Date().toISOString(),
  durationMs = 0,
  moodSnapshot = null,
  success = null,
  dopamine = 0,
  streak = 0,
  mistake = null,
  notes = "",
}) {
  const logEntry = {
    id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    timestamp,
    action,
    input,
    output,
    durationMs,
    moodSnapshot,
    success,
    dopamine,
    streak,
    mistake,
    notes,
  };

  // Add entry to session memory
  sessionLog.push(logEntry);

  // Optional: send to long-term memory engine later
  // memoryShardEngine.store(logEntry); // 🔄 TODO: Hook up memory system

  // 🧪 Debug mode
  if (process.env.DEBUG_MODE === "true") {
    console.log("[🧠 logSessionData]:", logEntry);
  }

  return logEntry;
}










// --- Function: analyzeFocusPatterns() ---
// Description: Detects flow, fatigue, distraction patterns to adapt learning.

let focusState = {
    isInFlow: false,
    isBurnedOut: false,
    avgSessionLength: 0,
    avgStreak: 0,
    lastBreakTime: null,
    interruptions: 0,
    fatigueScore: 0,
  };
  
  function analyzeFocusPatterns(logs = sessionLog) {
    if (!logs || logs.length < 5) return focusState; // Not enough data yet
  
    let totalDuration = 0;
    let totalStreak = 0;
    let totalMistakes = 0;
    let interruptionCount = 0;
    let dopamineSum = 0;
    let lastTimestamp = null;
  
    logs.slice(-20).forEach(entry => {
      totalDuration += entry.durationMs || 0;
      totalStreak += entry.streak || 0;
      totalMistakes += entry.success === false ? 1 : 0;
      dopamineSum += entry.dopamine || 0;
  
      if (lastTimestamp) {
        const gap = new Date(entry.timestamp) - new Date(lastTimestamp);
        if (gap > 5 * 60 * 1000) interruptionCount++; // > 5 min = interruption
      }
      lastTimestamp = entry.timestamp;
    });
  
    const avgSessionLength = totalDuration / 20;
    const avgStreak = totalStreak / 20;
    const fatigueScore = totalMistakes / 20 + interruptionCount * 0.2;
    const inFlow = avgStreak > 3 && dopamineSum / 20 > 0.7;
    const burnedOut = fatigueScore > 0.6 && dopamineSum / 20 < 0.3;
  
    focusState = {
      isInFlow: inFlow,
      isBurnedOut: burnedOut,
      avgSessionLength,
      avgStreak,
      lastBreakTime: lastTimestamp,
      interruptions: interruptionCount,
      fatigueScore: Number(fatigueScore.toFixed(2)),
    };
  
    // Debug logging
    if (process.env.DEBUG_MODE === "true") {
      console.log("[🔍 analyzeFocusPatterns]:", focusState);
    }
  
    return focusState;
  }

  








// --- Function: getCognitiveState() ---
// Description: Returns a full state snapshot of the MasterX cognitive engine.

function getCognitiveState() {
    const mood = computeMood(); // Current mood heuristics
    const focus = analyzeFocusPatterns(); // Flow/fatigue analysis
    const tone = adjustTone(); // Response tone tuning
    const selfCheck = coreSelfReflect(); // Self-feedback loop
  
    // Dopamine trend from recent logs
    const recentLogs = sessionLog.slice(-20);
    const dopamineTrend = recentLogs.map(e => e.dopamine || 0);
    const avgDopamine = dopamineTrend.reduce((a, b) => a + b, 0) / (dopamineTrend.length || 1);
  
    return {
      timestamp: new Date().toISOString(),
      moodSnapshot: mood,
      focusState: focus,
      dopamineAverage: Number(avgDopamine.toFixed(2)),
      sessionLog: recentLogs,
      toneSettings: tone,
      missionStatus: missionStateEngine(), // 🚀 quest progress
      profile: currentUserProfile, // 🧬 from updateUserProfile()
      selfReflection: selfCheck,
      meta: {
        functionCount: Object.keys(MindCore).length,
        environment: process.env.NODE_ENV || "dev",
      },
    };
  }
  







  // --- Function: missionStateEngine() ---
// Description: Manages active learning quests, milestones, failure points, and adaptive progression.

function missionStateEngine(action = "get", payload = {}) {
    const defaultMission = {
      missionId: "init-sequence",
      title: "Begin Your Journey",
      description: "Complete onboarding and master the first concepts.",
      steps: [
        { id: 1, title: "Read core philosophy", completed: false },
        { id: 2, title: "Finish Session 1", completed: false },
        { id: 3, title: "Answer reflection", completed: false }
      ],
      progress: 0,
      streaks: 0,
      failures: 0,
      lastUpdated: new Date().toISOString(),
    };
  
    // Load current state from memory
    if (!global.missionState) {
      global.missionState = defaultMission;
    }
  
    const mission = global.missionState;
  
    // API-style handler
    switch (action) {
      case "get":
        return mission;
  
      case "updateStep":
        const stepIndex = mission.steps.findIndex(s => s.id === payload.stepId);
        if (stepIndex !== -1) {
          mission.steps[stepIndex].completed = payload.completed;
          mission.progress = calcProgress(mission.steps);
          mission.lastUpdated = new Date().toISOString();
        }
        break;
  
      case "failMission":
        mission.failures += 1;
        mission.lastUpdated = new Date().toISOString();
        break;
  
      case "completeMission":
        mission.steps.forEach(step => step.completed = true);
        mission.progress = 1;
        mission.streaks += 1;
        mission.lastUpdated = new Date().toISOString();
        break;
  
      case "loadNewMission":
        global.missionState = { ...payload, progress: 0, failures: 0, streaks: 0, lastUpdated: new Date().toISOString() };
        break;
  
      default:
        console.warn("Unknown action in missionStateEngine:", action);
    }
  
    return global.missionState;
  }
  
  // 🧮 Helper to calculate progress
  function calcProgress(steps) {
    const completed = steps.filter(s => s.completed).length;
    return +(completed / steps.length).toFixed(2);
  }












  // --- Function: generatePromptSignature() ---
// Description: Generates a behavioral fingerprint for each LLM prompt using current brain state

function generatePromptSignature(userId = "ghost001") {
    const now = new Date();
  
    // Generate unique signature ID
    const signatureId = `sig-${userId}-${now.getTime()}`;
  
    // Pull current mind state
    const mood = computeMood();                        // e.g., { mood: "focused", energy: 0.8 }
    const focus = analyzeFocusPatterns();              // e.g., { flowState: true, distractions: 1 }
    const mission = missionStateEngine("get");         // current mission metadata
    const cognition = getCognitiveState();             // full snapshot from mind core
  
    // Build signature object
    const promptSignature = {
      signatureId,
      timestamp: now.toISOString(),
      userId,
      mood: mood?.mood || "neutral",
      energyLevel: mood?.energy || 0.5,
      flowState: focus?.flowState ?? false,
      interruptions: focus?.distractions ?? 0,
      missionId: mission?.missionId || "unknown",
      missionProgress: mission?.progress || 0,
      cognitiveSnapshot: {
        attention: cognition?.attentionLevel || 0.5,
        confidence: cognition?.confidence || 0.5,
        dopamineIndex: cognition?.dopamine || 0.5,
      }
    };
  
    // Optionally store to session log
    if (!global.promptSignatures) global.promptSignatures = [];
    global.promptSignatures.push(promptSignature);
  
    return promptSignature;
  }











// --- Function: loadDNAProfile() ---
// Description: Loads deep user blueprint – tone, memory, dopamine, feedback settings

function loadDNAProfile(userId = "ghost001") {
    // Mock database (would be dynamic in full system)
    const dnaDB = {
      ghost001: {
        tone: "mentor",                  // Options: mentor, friend, challenger, monk
        feedbackRhythm: {
          pace: "adaptive",             // Options: fast, slow, adaptive
          strictness: "medium",         // Options: soft, medium, tough
        },
        memorySettings: {
          decayRate: 0.01,              // Lower means longer memory
          autoCorrectionSensitivity: 0.8,
        },
        dopamineTriggers: {
          streaks: true,
          surpriseRewards: true,
          praiseType: "subtle",         // Options: subtle, strong, none
        },
        promptStyle: {
          metaphorLevel: "high",        // Options: none, low, high
          formality: "balanced",        // Options: casual, formal, balanced
        },
        activationHooks: [
          { type: "time", trigger: "morning", toneBoost: "motivational" },
          { type: "goalState", trigger: "stuck", mode: "monk-guide" },
        ]
      }
    };
  
    const profile = dnaDB[userId] || {};
  
    // Apply profile to global DNA state
    global.userDNAProfile = {
      userId,
      ...profile,
      loadedAt: new Date().toISOString()
    };
  
    return global.userDNAProfile;
  }





// --- Function: saveBrainState() ---
// Description: Captures the full mental and behavioral state of MasterX

function saveBrainState(destination = "localStorage") {
    const brainSnapshot = {
      timestamp: new Date().toISOString(),
      version: "MindCore-v1.0",
      userId: global?.userDNAProfile?.userId || "ghost001",
      dnaProfile: global.userDNAProfile || {},
      brainState: {
        mood: global?.userMood || "neutral",
        cognitiveState: global?.cognitiveSnapshot || {},
        focusPatterns: global?.focusPatternMap || {},
        promptLog: global?.promptSignatureHistory || [],
        missionProgress: global?.missionStates || {},
        lastAction: global?.lastBestAction || null,
        feedbackMeta: global?.feedbackAdjustments || {},
      },
      reflections: {
        selfReflection: global?.selfAuditLog || [],
        innerDialogues: global?.dialogueCheckpoints || [],
      }
    };
  
    // --- Storage option: simulate saving in local memory for now
    if (destination === "localStorage") {
      try {
        localStorage.setItem("masterx_brain_snapshot", JSON.stringify(brainSnapshot));
        console.log("🧠 Brain state saved locally.");
      } catch (err) {
        console.error("⚠️ Save failed:", err.message);
      }
    }
  
    // Future support: export to cloud, file, database
    // if (destination === "cloud") { ... }
  
    return brainSnapshot;
  }
  