import React from "react";
import { motion } from "framer-motion";

const MindPulse = ({ activity = 0.4 }) => {
  const scale = 1 + activity;
  const pulseColor =
    activity > 0.7
      ? "bg-green-400"
      : activity > 0.4
      ? "bg-yellow-400"
      : "bg-red-500";

  return (
    <motion.div
      className={`w-24 h-24 rounded-full ${pulseColor} shadow-lg`}
      animate={{
        scale,
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

export default MindPulse;
