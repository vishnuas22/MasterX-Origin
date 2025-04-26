// MoodAura.jsx

import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const moodColors = {
  calm: "#3b82f6",
  focused: "#10b981",
  inspired: "#f59e0b",
  excited: "#ef4444",
  tired: "#6b7280",
};

const MoodAura = ({ moodLevel = 70, moodTrend = [] }) => {
  // Determine mood state based on level
  const moodState =
    moodLevel > 85 ? "excited" :
    moodLevel > 70 ? "inspired" :
    moodLevel > 55 ? "focused" :
    moodLevel > 40 ? "calm" : "tired";

  const color = moodColors[moodState];
  const moodEmoji = {
    excited: "🔥",
    inspired: "✨",
    focused: "🎯",
    calm: "🌊",
    tired: "💤",
  }[moodState];

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mt-8 p-6 bg-zinc-900/90 border border-zinc-700 rounded-2xl shadow-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg font-bold">
          {moodEmoji} Mood Aura: <span className="capitalize text-emerald-400">{moodState}</span>
        </h2>
        <span className="text-zinc-400 text-sm">Mood Level: {moodLevel}%</span>
      </div>

      {/* Aura Glow Visual */}
      <div className="flex items-center justify-center mb-6">
        <motion.div
          className="w-32 h-32 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 40px ${color}` }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>

      {/* Mood Trend Chart */}
      <div className="bg-zinc-800 p-4 rounded-xl">
        <h3 className="text-zinc-400 text-sm mb-2">📈 Mood Pattern</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={moodTrend}>
            <XAxis dataKey="time" stroke="#ccc" />
            <YAxis domain={[0, 100]} stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#111", border: "none", color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="mood"
              stroke={color}
              strokeWidth={2}
              dot={{ r: 4, fill: color }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default MoodAura;
