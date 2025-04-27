// src/components/MoodAura.jsx
import React from "react";
import { motion } from "framer-motion";

const moodConfigs = {
  "Flow State": {
    gradient: "from-cyan-400 via-sky-500 to-indigo-600",
    animationSpeed: "slow",
  },
  "High Focus": {
    gradient: "from-emerald-400 via-emerald-500 to-emerald-600",
    animationSpeed: "slow",
  },
  "Overloaded": {
    gradient: "from-red-500 via-orange-500 to-yellow-400",
    animationSpeed: "fast",
  },
  "Calm": {
    gradient: "from-indigo-400 via-blue-500 to-violet-600",
    animationSpeed: "slower",
  },
  "Hyperdrive": {
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    animationSpeed: "fast",
  },
  "Default": {
    gradient: "from-zinc-700 via-zinc-800 to-black",
    animationSpeed: "slow",
  },
};

const MoodAura = ({ currentState = "Default" }) => {
  const { gradient, animationSpeed } = moodConfigs[currentState] || moodConfigs["Default"];

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br ${gradient} blur-3xl opacity-40 animate-mood`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      style={{
        animationDuration: animationSpeed === "fast" ? "10s" : animationSpeed === "slow" ? "20s" : "30s",
      }}
    />
  );
};

export default MoodAura;
