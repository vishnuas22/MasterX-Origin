// frontend/src/components/NeuroStatChart.jsx

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const radarData = [
  { stat: "Focus", value: 88 },
  { stat: "Mood", value: 72 },
  { stat: "Energy", value: 65 },
  { stat: "Retention", value: 91 },
  { stat: "Flow", value: 78 },
];

const lineData = [
  { time: "Mon", focus: 65 },
  { time: "Tue", focus: 72 },
  { time: "Wed", focus: 81 },
  { time: "Thu", focus: 78 },
  { time: "Fri", focus: 88 },
  { time: "Sat", focus: 92 },
  { time: "Sun", focus: 85 },
];

const NeuroStatChart = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Radar Chart */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
        <h2 className="text-white text-lg font-semibold mb-4">🧠 Cognitive Profile</h2>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="#444" />
            <PolarAngleAxis dataKey="stat" stroke="#fff" />
            <Radar
              name="Ghost"
              dataKey="value"
              stroke="#00e3ff"
              fill="#00e3ff"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
        <h2 className="text-white text-lg font-semibold mb-4">📈 Focus Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="time" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#111", border: "none", color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="focus"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 5, fill: "#10b981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default NeuroStatChart;
