// MasterX/frontend/pages/MasterXHome.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, Mic, ArrowRight, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import classNames from "classnames";
import "../index.css";

const LearningModes = ["AGI Research", "Focus Mode", "Dopamine Surge", "Creative AI"];

const MasterXHome = () => {
  const [mode, setMode] = useState(LearningModes[0]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [input, setInput] = useState("");
  const [showModules, setShowModules] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-black text-white font-sans overflow-hidden relative">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.4 }}
        className="fixed z-50 top-0 left-0 h-screen w-64 px-6 py-6 bg-white/10 border-r border-white/20 shadow-2xl backdrop-blur-xl flex flex-col justify-between"
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-cyan-400">MasterX</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white/50 hover:text-cyan-300 transition"
            >
              ×
            </button>
          </div>

          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-white/70">Mode</span>
              <ChevronDown className="h-4 w-4 text-white/50" />
            </div>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full p-2 bg-white/10 border border-white/20 rounded-xl text-sm text-white focus:outline-none"
            >
              {LearningModes.map((m) => (
                <option key={m} className="bg-black text-white">
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <button className="flex items-center gap-2 text-white/70 hover:text-cyan-400">
              <Search size={18} /> Search
            </button>
            <button className="flex items-center gap-2 text-white/70 hover:text-cyan-400">
              🔆 Focus Waves
            </button>
            <button className="flex items-center gap-2 text-white/70 hover:text-cyan-400">
              ⚡ Dopamine Surge
            </button>
            <button className="flex items-center gap-2 text-white/70 hover:text-cyan-400">
              🧠 Neural Drive
            </button>
          </div>
        </div>
        <div className="text-xs text-white/30">v3.0 · NeuroUI</div>
      </motion.aside>

      {/* Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="absolute top-4 left-4 z-40 text-cyan-300 hover:text-white"
        >
          ☰
        </button>
      )}

      {/* Main Panel */}
      <main className="flex flex-col items-center justify-start w-full min-h-screen pt-24 px-6 md:px-24 lg:px-48 text-center transition-all">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to MasterX
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Your AGI-powered interface for ultra-focused learning.
        </motion.p>

        {/* Search Input Section */}
        <motion.div
          className="relative mt-12 w-full max-w-3xl flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <input
            type="text"
            placeholder="Ask MasterX anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-6 py-4 pr-16 rounded-full text-white text-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <div className="absolute right-4 flex gap-3 items-center">
            <UploadCloud size={20} className="text-white/60 hover:text-cyan-300 cursor-pointer" />
            <Mic size={20} className="text-white/60 hover:text-cyan-300 cursor-pointer" />
            <ArrowRight size={22} className="text-cyan-400 cursor-pointer" />
          </div>
        </motion.div>

        {/* Upload Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 flex items-center gap-2 text-cyan-300 hover:text-white"
        >
          <UploadCloud /> Upload files & docs
        </motion.button>

        {/* Dynamic Modules (Revealed on hover/click) */}
        <div
          className={classNames(
            "mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500",
            showModules ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          )}
          onMouseEnter={() => setShowModules(true)}
          onMouseLeave={() => setShowModules(false)}
        >
          {/* Placeholder Modules - Replace with actual components */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl hover:scale-105 transform transition duration-300">
            <h3 className="text-white text-lg font-bold mb-2">Neural Stats</h3>
            <p className="text-white/50 text-sm">Graph/Chart placeholder</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl hover:scale-105 transform transition duration-300">
            <h3 className="text-white text-lg font-bold mb-2">Mind Waves</h3>
            <p className="text-white/50 text-sm">Pulse/Activity placeholder</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl hover:scale-105 transform transition duration-300">
            <h3 className="text-white text-lg font-bold mb-2">Cognitive Console</h3>
            <p className="text-white/50 text-sm">Real-time insight feed</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MasterXHome;
