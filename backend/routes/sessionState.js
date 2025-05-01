// /routes/sessionState.js
const express = require('express');
const router = express.Router();

// Mock brain state pulled from live memory (replace later with real store)
const mindSnapshot = {
  user: {
    id: 'ghost001',
    name: 'Ghost',
    energyLevel: 0.86, // 0.0 to 1.0
    focusStreak: 5,
    currentMood: 'focused', // can be: 'distracted', 'burned_out', 'in_flow'
    dopamineLevel: 0.72,
  },
  session: {
    sessionId: 'sess_2025_04_12',
    mission: {
      name: 'Deep Focus Learning Loop',
      progress: 0.45,
      failureCount: 1,
      successCount: 4,
      inProgress: true
    },
    lastAction: 'computeMood',
    nextBestAction: 'adjustTone',
    rewardSignal: '💡 Microbreak suggested',
    promptSignature: {
      type: 'adaptive',
      fingerprint: 'ghost_focused_a3c9d1',
    }
  },
  feedbackLoop: {
    score: 0.78, // dynamic feedback quality
    lastMistake: 'overloaded prompt loop',
    lastCorrection: 'reduced cognitive complexity',
    timeSinceUpdate: '3m 22s',
  },
  meta: {
    timestamp: new Date(),
    version: '1.0.0-alpha'
  }
};

// Route: GET current mind state
router.get('/session/state', (req, res) => {
  res.status(200).json({
    success: true,
    state: mindSnapshot
  });
});

module.exports = router;
