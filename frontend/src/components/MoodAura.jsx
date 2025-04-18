// MoodAura.jsx

import React from "react";
import { motion } from "framer-motion";
import { uiTheme } from "../uiTheme";

const MoodAura = ({ mood }) => {
  const auraColor = uiTheme.moodColors[mood] || "#3b82f6"; // fallback to blue

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.45 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="absolute w-full h-full"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle at center, ${auraColor} 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />
    </motion.div>
  );
};

export default MoodAura;
