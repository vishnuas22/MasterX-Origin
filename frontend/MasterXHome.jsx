// MasterXHome.jsx - Final Futuristic Version
import React from "react";
import NeuroCardGrid from "../components/NeuroCardGrid";
import CognitiveConsole from "../components/CognitiveConsole";
import MindPulse from "../components/MindPulse";
import MoodAura from "../components/MoodAura";
import NeuralDashboard from "../components/NeuralDashboard";
import NeuroCommand from "../components/NeuroCommand";
import NeuroPulse from "../components/NeuroPulse";
import NeuroStatChart from "../components/NeuroStatChart";
import NeuroStatGrid from "../components/NeuroStatGrid";
import NeuroCognitiveContainer from "../components/NeuroCognitiveContainer";

export default function MasterXHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white font-sans">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-center border-b border-gray-800 shadow-md shadow-purple-500/10">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 animate-text-glow">
            MasterX
          </h1>
          <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500">v3.0 NeuroUI</span>
        </div>
        <div className="flex items-center space-x-3">
          <select className="bg-gray-900 text-white px-3 py-1 rounded border border-gray-700">
            <option>AGI Research</option>
            <option>Neuro Learning</option>
            <option>Focus Mode</option>
          </select>
          <button className="text-sm bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded-full shadow-lg transition-all">
            🔍 Ask MasterX
          </button>
        </div>
      </header>

      {/* Central Search + Tools */}
      <main className="px-6 py-10 flex flex-col items-center space-y-6">
        <div className="w-full max-w-3xl">
          <input
            type="text"
            placeholder="Ask MasterX anything..."
            className="w-full px-6 py-4 rounded-xl bg-black/80 border border-gray-700 focus:ring-2 ring-purple-500 placeholder-gray-500 text-lg shadow-md"
          />
        </div>

        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition">📁 Upload files & docs</button>
          <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition">🧠 Tools</button>
        </div>

        <div className="flex space-x-4 text-xs text-white/70">
          <span className="px-3 py-1 border border-white/20 rounded-full">🌀 Focus Waves</span>
          <span className="px-3 py-1 border border-white/20 rounded-full">⚡ Dopamine Surge</span>
          <span className="px-3 py-1 border border-white/20 rounded-full">🧬 Neural Drive</span>
        </div>
      </main>

      {/* Neuro Components Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-10">
        <NeuroCardGrid />
        <CognitiveConsole />
        <MindPulse />
        <MoodAura />
        <NeuroPulse />
        <NeuroStatChart />
        <NeuralDashboard />
        <NeuroCommand />
        <NeuroStatGrid />
        <NeuroCognitiveContainer />
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 p-6 border-t border-gray-800">
        © 2025 MasterX AGI Interface • Built with purpose-driven focus
      </footer>
    </div>
  );
}
