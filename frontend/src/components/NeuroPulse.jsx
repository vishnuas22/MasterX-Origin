// NeuroPulse.jsx

import React from "react";
import { motion } from "framer-motion";

const dotVariants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.1,
    },
  },
};

const NeuroPulse = ({ isThinking = false }) => {
  if (!isThinking) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 rounded-full bg-emerald-500"
          variants={dotVariants}
          animate="animate"
          transition={{ delay: index * 0.2 }}
        />
      ))}
    </div>
  );
};

export default NeuroPulse;
