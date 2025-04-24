// src/components/CognitiveConsole.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CognitiveConsole = () => {
  const [logs, setLogs] = useState([
    "Initializing Neural Synapses...",
    "Loading Conscious Pathways...",
    "Awaiting user stimulus...",
  ]);

  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLogs((prev) => [...prev, `> ${input}`, "🔍 Processing request..."]);
    setInput("");
    // Insert logic to simulate AI response here
  };

  return (
    <motion.div
      className="bg-black bg-opacity-50 rounded-2xl p-6 border border-cyan-400 text-green-400 font-mono shadow-xl h-[500px] overflow-y-auto space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-lg font-bold text-cyan-300 mb-4">
        🧠 Cognitive Console Interface
      </div>
      <div className="h-[350px] overflow-y-scroll pr-2 custom-scroll">
        {logs.map((log, idx) => (
          <div key={idx} className="text-sm leading-relaxed animate-fadeIn">
            {log}
          </div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="mt-4">
        <input
          className="w-full bg-black border border-cyan-500 text-green-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="> Engage thought protocol..."
        />
      </form>
    </motion.div>
  );
};

export default CognitiveConsole;
