// SessionUI.jsx

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MoodAura from "./components/MoodAura";
import MindPulse from "./components/MindPulse";
import ActionCenter from "./components/ActionCenter";
import SessionTimeline from "./components/SessionTimeline";
import FeedbackPanel from "./components/FeedbackPanel";
import GhostEye from "./components/GhostEye";
import { sessionState } from "./sessionState";
import { uiTheme } from "./uiTheme";

const SessionUI = () => {
  const { mood, activeMission, pulseRate, suggestions, focusLevel } = sessionState();

  return (
    <div
      className={`min-h-screen bg-black text-white flex flex-col items-center justify-center p-4`}
      style={{
        background: `radial-gradient(circle at center, ${uiTheme.moodColors[mood]}, #000 80%)`,
      }}
    >
      {/* 1. Glowing Mood Aura */}
      <MoodAura mood={mood} />

      {/* 2. Central Mind Pulse */}
      <div className="z-10 mt-10 w-full max-w-6xl flex flex-col items-center space-y-6">
        <MindPulse pulseRate={pulseRate} mood={mood} />

        {/* 3. Mission Objective + Thought Tracker */}
        <div className="w-full px-6">
          <ActionCenter
            currentMission={activeMission}
            focusLevel={focusLevel}
            suggestions={suggestions}
          />
        </div>

        {/* 4. Timeline of MicroWins, Failures, Dopamine Hits */}
        <div className="w-full px-6">
          <SessionTimeline />
        </div>

        {/* 5. Feedback Engine: Dynamic Reinforcement */}
        <div className="w-full px-6">
          <FeedbackPanel mood={mood} />
        </div>
      </div>

      {/* 6. Floating AI Vision (GhostEye HUD) */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-10 right-10"
        >
          <GhostEye mood={mood} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SessionUI;
