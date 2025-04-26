import React from "react";
import { motion } from "framer-motion";
import uiTheme from "@/uiTheme"; // ✅ Make sure this path resolves correctly

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
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={uiTheme.transition.default}
    >
      <div className="flex items-center justify-between gap-6 text-white">
        {/* Mood Bubble + Name */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full border-2 border-white shadow-inner"
            style={{ backgroundColor: moodColor }}
          ></div>
          <div className="text-sm font-bold">👤 {userName}</div>
        </div>

        {/* Mood + Focus */}
        <div className="flex flex-col text-xs">
          <span className="opacity-60">
            Mood: <b className="text-white">{mood}</b>
          </span>
          <span className="opacity-60">
            Focus: <b className="text-white">{focus}</b>
          </span>
        </div>

        {/* Dopamine Progress */}
        <div className="w-32 h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
          <motion.div
            className="h-full"
            style={{ backgroundColor: moodColor }}
            animate={{ width: `${Math.min(dopamine * 100, 100)}%` }}
            transition={uiTheme.transition.chart}
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
