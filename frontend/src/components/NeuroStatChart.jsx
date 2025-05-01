import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const NeuroStatChart = ({ data = [] }) => {
  return (
    <motion.div
      className="w-full max-w-5xl mx-auto p-6 mt-8 rounded-2xl bg-gradient-to-br from-[#0f172a]/70 to-[#1e293b]/80 border border-cyan-700/40 shadow-[0_0_40px_rgba(0,255,255,0.2)] backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
    >
      <h2 className="text-cyan-400 font-bold mb-4 text-lg tracking-widest flex items-center gap-2">
        🧠 NeuroStat Real-Time
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis domain={[0, 100]} stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              borderColor: "#38bdf8",
              borderWidth: 1,
              color: "#fff",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="focus"
            stroke="#0ea5e9"
            strokeWidth={3}
            dot={{ r: 5, stroke: "#0ea5e9", fill: "#0ea5e9", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="dopamine"
            stroke="#facc15"
            strokeWidth={3}
            dot={{ r: 5, stroke: "#facc15", fill: "#facc15", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ r: 5, stroke: "#22c55e", fill: "#22c55e", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default NeuroStatChart;
