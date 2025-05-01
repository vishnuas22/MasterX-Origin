// CognitiveConsole.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CornerDownLeft } from "lucide-react";

const CognitiveConsole = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "ai", text: "Welcome to the Cognitive Console. 🌌 Type /help to begin." },
  ]);

  const handleCommand = (command) => {
    let response = "Unknown command. Type /help for assistance.";

    switch (command.trim().toLowerCase()) {
      case "/help":
        response = "Available commands: /status, /focus, /dopamine, /mission";
        break;
      case "/status":
        response = "All systems nominal. Cognitive functions optimal. 🧠";
        break;
      case "/focus":
        response = "Focus levels at 92%. You're in a deep work state. 🔥";
        break;
      case "/dopamine":
        response = "Dopamine surges stable. Motivation at peak levels. ⚡";
        break;
      case "/mission":
        response = "Mission Progress: 72.4% — nearing the goal. 🚀";
        break;
      default:
        break;
    }

    setMessages((prev) => [
      ...prev,
      { type: "user", text: command },
      { type: "ai", text: response },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 mt-6 rounded-2xl border border-cyan-800/50 shadow-[0_0_60px_rgba(0,255,255,0.07)] backdrop-blur-md overflow-hidden relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.9 }}
    >
      <div className="flex items-center gap-2 mb-4 text-cyan-300">
        <Terminal className="animate-pulse" size={20} />
        <h2 className="text-lg font-bold">Cognitive Console</h2>
      </div>

      <div className="h-64 overflow-y-auto pr-2 mb-4 scrollbar-thin scrollbar-thumb-cyan-700/50 scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`mb-2 text-sm ${
                msg.type === "user" ? "text-emerald-400 text-right" : "text-cyan-400 text-left"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command..."
          className="flex-1 p-2 bg-zinc-800/60 border border-cyan-700/30 text-cyan-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-cyan-500/50"
        />
        <button
          type="submit"
          className="p-2 bg-cyan-700 hover:bg-cyan-600 rounded-md text-white"
        >
          <CornerDownLeft size={18} />
        </button>
      </form>
    </motion.div>
  );
};

export default CognitiveConsole;
