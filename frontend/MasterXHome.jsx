// MasterX/frontend/src/MasterXHome.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, Mic, ArrowRight } from "lucide-react";
import { BrainCircuit } from "lucide-react";

import Sidebar from "../components/Sidebar";
import NeuroCardGrid from "../components/NeuroCardGrid";
import NeuroPulse from "../components/NeuroPulse";
import NeuroStatChart from "../components/NeuroStatChart";
import CognitiveConsole from "../components/CognitiveConsole";
import MoodAura from "../components/MoodAura";
import NeuroCommand from "../components/NeuroCommand";

const LearningModes = ["AGI Research", "Focus Mode", "Dopamine Surge", "Creative AI"];

const MasterXHome = () => {
  const [mode, setMode] = useState(LearningModes[0]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [input, setInput] = useState("");
  const [showModules, setShowModules] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-black text-white font-sans overflow-hidden relative">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        learningModes={LearningModes}
        selectedMode={mode}
        onModeChange={setMode}
        additionalTools={[
          { label: "Focus Waves", icon: "🔆" },
          { label: "Dopamine Surge", icon: "⚡" },
          { label: "Neural Drive", icon: "🧠" },
        ]}
      />

      {/* Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <motion.button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-6 left-6 z-50 p-4 rounded-full bg-white/10 border border-white/20 shadow-lg text-white backdrop-blur-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="text-cyan-300"
          >
            <BrainCircuit size={22} />
          </motion.div>
        </motion.button>
      )}

      {/* Main Content Area */}
      <main className="ml-[250px] w-full max-w-6xl px-6 pt-20 pb-12 transition-all duration-300">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to MasterX
        </motion.h1>

        <motion.p
          className="mt-4 text-white/60 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your AGI-powered interface for ultra-focused learning.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="relative mt-10 w-full max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Ask MasterX anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-6 py-4 pr-20 rounded-full text-white text-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3">
            <UploadCloud size={20} className="text-white/60 hover:text-cyan-300 cursor-pointer" />
            <Mic size={20} className="text-white/60 hover:text-cyan-300 cursor-pointer" />
            <ArrowRight size={22} className="text-cyan-400 cursor-pointer" />
          </div>
        </motion.div>

        {/* Upload Button */}
        <motion.button
          className="mt-6 flex items-center gap-2 text-cyan-300 hover:text-white"
          whileHover={{ scale: 1.05 }}
        >
          <UploadCloud /> Upload files & docs
        </motion.button>

        {/* Toggle Tools Button */}
        <motion.button
          onClick={() => setShowModules(!showModules)}
          className="mt-10 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-all"
          whileHover={{ scale: 1.05 }}
        >
          {showModules ? "Hide Tools" : "Show Tools"}
        </motion.button>

        {/* Tools Section (Hidden until toggled) */}
        {showModules && (
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <NeuroStatChart />
            <NeuroPulse />
            <CognitiveConsole />
            <NeuroCardGrid />
            <MoodAura />
            <NeuroCommand />
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default MasterXHome;
