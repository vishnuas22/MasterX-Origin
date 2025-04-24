import React from "react";
import { motion } from "framer-motion";

const getMoodColor = (mood) => {
  if (mood > 0.75) return "from-green-400 via-emerald-500 to-teal-600";
  if (mood > 0.5) return "from-blue-400 via-indigo-500 to-purple-600";
  if (mood > 0.25) return "from-yellow-400 via-orange-500 to-pink-600";
  return "from-red-500 via-rose-600 to-purple-700";
};

const MoodAura = ({ mood = 0.5 }) => {
  const aura = getMoodColor(mood);

  return (
    <motion.div
      className={`rounded-full w-64 h-64 mx-auto blur-2xl animate-pulse bg-gradient-to-tr ${aura}`}
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
};

export default MoodAura;
