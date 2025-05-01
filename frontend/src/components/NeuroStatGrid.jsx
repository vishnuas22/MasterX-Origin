import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Clock4, Flame } from "lucide-react";

const stats = [
  { label: "Cognitive Efficiency", value: "92%", icon: <TrendingUp size={18} /> },
  { label: "Focus Duration", value: "3h 45m", icon: <Clock4 size={18} /> },
  { label: "Neuroplasticity Index", value: "87", icon: <BarChart3 size={18} /> },
  { label: "Mental Energy", value: "High", icon: <Flame size={18} /> },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring" } },
};

const NeuroStatGrid = () => {
  return (
    <motion.div
      className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6"
      variants={gridVariants}
      initial="hidden"
      animate="show"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="glass px-5 py-4 rounded-xl border border-cyan-800/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              {stat.label}
            </span>
            <span className="text-cyan-500 group-hover:scale-110 transition-transform duration-200">
              {stat.icon}
            </span>
          </div>
          <div className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {stat.value}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NeuroStatGrid;
