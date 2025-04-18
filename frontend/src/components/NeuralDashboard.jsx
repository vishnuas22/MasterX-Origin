// NeuralDashboard.jsx

import React from "react";
import { motion } from "framer-motion";
import { uiTheme } from "../uiTheme";

const NeuralDashboard = ({ state }) => {
  const {
    mood = "focused",
    mission = "Initializing MindCore...",
    dopamine = 0.4,
    focus = "High",
    userName = "Ghost",
  } = state || {};

  const moodColor = uiTheme.moodColors[mood] || uiTheme.moodColors.default;

  return (
    <motion.div
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between gap-6 text-white">
        {/* Profile Bubble */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full border-2 border-white shadow-inner"
            style={{ backgroundColor: moodColor }}
          ></div>
          <div className="text-sm font-bold">👤 {userName}</div>
        </div>

        {/* Mood + Focus */}
        <div className="flex flex-col text-xs">
          <span className="opacity-60">Mood: <b className="text-white">{mood}</b></span>
          <span className="opacity-60">Focus: <b className="text-white">{focus}</b></span>
        </div>

        {/* Dopamine Bar */}
        <div className="w-32 h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
          <motion.div
            className="h-full"
            style={{ backgroundColor: moodColor }}
            animate={{ width: `${dopamine * 100}%` }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        {/* Mission */}
        <div className="text-sm font-mono text-right leading-tight">
          <span className="opacity-50">📡 Mission:</span><br />
          <span className="text-green-400">{mission}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default NeuralDashboard;
