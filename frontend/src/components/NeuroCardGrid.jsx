// frontend/src/components/NeuroCardGrid.jsx

import React from "react";
import { motion } from "framer-motion";

// Sample mock data – can be replaced later by props or API state
const mockStats = [
  {
    title: "Focus Level",
    value: "87%",
    accent: "bg-indigo-500",
    glow: "shadow-indigo-400",
    symbol: "🧘",
  },
  {
    title: "Streak Score",
    value: "12 Days",
    accent: "bg-yellow-400",
    glow: "shadow-yellow-300",
    symbol: "🔥",
  },
  {
    title: "Active Mission",
    value: "Neural Feedback Loop",
    accent: "bg-pink-500",
    glow: "shadow-pink-300",
    symbol: "🎯",
  },
  {
    title: "Cognitive Boosts",
    value: "3 Today",
    accent: "bg-green-500",
    glow: "shadow-green-400",
    symbol: "⚡",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const NeuroCard = ({ stat, index }) => (
  <motion.div
    className={`rounded-2xl p-6 backdrop-blur-md bg-opacity-20 border border-white/10 text-white ${stat.accent} ${stat.glow}`}
    custom={index}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="flex items-center justify-between">
      <span className="text-2xl">{stat.symbol}</span>
      <h2 className="text-lg font-semibold">{stat.title}</h2>
    </div>
    <div className="mt-4 text-3xl font-bold font-mono">{stat.value}</div>
  </motion.div>
);

const NeuroCardGrid = ({ stats = mockStats }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <NeuroCard key={index} stat={stat} index={index} />
      ))}
    </div>
  );
};

export default NeuroCardGrid;
