// frontend/src/SessionUI.jsx
import React from "react";
import { motion } from "framer-motion";
import MindPulse from "@/components/MindPulse";
import MoodAura from "@/components/MoodAura";
import NeuroCommand from "@/components/NeuroCommand";
import CognitiveConsole from "@/components/CognitiveConsole";
import CognitiveHUD from "@/components/CognitiveHUD";

const SessionUI = () => {
  return (
    <motion.div
      className="min-h-screen w-full p-6 grid grid-cols-12 gap-4 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Top Cognitive HUD */}
      <div className="col-span-12">
        <CognitiveHUD />
      </div>

      {/* Main Left – MoodAura & NeuroCommand */}
      <div className="col-span-3 flex flex-col gap-4">
        <MoodAura />
        <MoodAura mood={sessionState.moodLevel} />

        <NeuroCommand />
      </div>

      {/* Core Console */}
      <div className="col-span-6">
      <CognitiveConsole commands={sessionState.recentCommands} />

        <CognitiveConsole />
      </div>

      {/* Right Brain Monitor */}
      <div className="col-span-3 flex flex-col gap-4">
        <MindPulse />
        <MindPulse activity={sessionState.cognitiveLoad} />

      </div>
    </motion.div>
  );
};

export default SessionUI;
