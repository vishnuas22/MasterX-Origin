// NeuroCognitiveHUD.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Sparkles, Zap, Compass, Signal, BatteryFull, Activity } from "lucide-react";

const NeuroCognitiveHUD = ({
  focusData = [],
  dopamineSurges = [],
  missionProgress = 0,
  currentState = "Flow State",
}) => {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto mt-8 p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-800/50 rounded-2xl shadow-[0_0_60px_rgba(0,255,255,0.1)] backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.9 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-bold flex items-center gap-2">
          <Sparkles className="text-cyan-400 animate-pulse" /> NeuroCognitive HUD
        </h2>

        <div className="flex items-center gap-4 text-sm text-cyan-300">
          <span className="flex items-center gap-1">
            <Signal size={16} /> Signal
          </span>
          <span className="flex items-center gap-1">
            <BatteryFull size={16} /> Power
          </span>
          <span className="flex items-center gap-1">
            <Activity size={16} /> {currentState}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Focus Pattern */}
        <div className="bg-zinc-800/70 p-5 rounded-xl shadow-inner border border-cyan-900/30">
          <h3 className="text-zinc-300 text-sm mb-2 flex items-center gap-1">
            🧠 Focus Waves
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={focusData}>
              <XAxis dataKey="time" stroke="#888" />
              <YAxis domain={[0, 100]} stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: "#111", color: "#fff" }} />
              <Line
                type="monotone"
                dataKey="focus"
                stroke="#0ea5e9"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#22d3ee" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Dopamine Surges */}
        <div className="bg-zinc-800/70 p-5 rounded-xl shadow-inner border border-yellow-900/30">
          <h3 className="text-zinc-300 text-sm mb-2 flex items-center gap-1">
            ⚡ Dopamine Surges
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dopamineSurges}>
              <XAxis dataKey="time" stroke="#888" />
              <YAxis domain={[0, 100]} stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: "#111", color: "#fff" }} />
              <Line
                type="monotone"
                dataKey="intensity"
                stroke="#facc15"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#fde68a" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Mission Progress */}
      <div className="mt-8">
        <h3 className="text-zinc-400 text-sm mb-2 flex items-center gap-1">
          <Compass size={16} /> Mission Progress
        </h3>
        <div className="w-full h-4 bg-zinc-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 shadow-lg shadow-emerald-500/30"
            style={{ width: `${missionProgress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${missionProgress}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="text-right text-xs text-zinc-400 mt-1">
          {missionProgress.toFixed(1)}% complete
        </div>
      </div>
    </motion.div>
  );
};

export default NeuroCognitiveHUD;
