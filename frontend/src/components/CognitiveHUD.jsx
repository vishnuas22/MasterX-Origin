// CognitiveHUD.jsx

import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CognitiveHUD = ({
  focusData = [],
  dopamineSurges = [],
  missionProgress = 0,
}) => {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto mt-8 p-6 bg-zinc-900/90 border border-zinc-700 rounded-2xl shadow-2xl backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.9 }}
    >
      <h2 className="text-white text-lg font-bold mb-4">🧬 Cognitive HUD</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Focus Pattern */}
        <div>
          <h3 className="text-zinc-400 text-sm mb-2">🧠 Focus Waves</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={focusData}>
              <XAxis dataKey="time" stroke="#999" />
              <YAxis domain={[0, 100]} stroke="#999" />
              <Tooltip />
              <Line type="monotone" dataKey="focus" stroke="#4ade80" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Dopamine Surges */}
        <div>
          <h3 className="text-zinc-400 text-sm mb-2">⚡ Dopamine Surges</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dopamineSurges}>
              <XAxis dataKey="time" stroke="#999" />
              <YAxis domain={[0, 100]} stroke="#999" />
              <Tooltip />
              <Line type="monotone" dataKey="intensity" stroke="#facc15" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Mission Progress */}
      <div className="mt-6">
        <h3 className="text-zinc-400 text-sm mb-2">🧭 Mission Progress</h3>
        <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500"
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

export default CognitiveHUD;
