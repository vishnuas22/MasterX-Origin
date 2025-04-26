import React from "react";
import NeuroCardGrid from "../components/NeuroCardGrid";
import CognitiveConsole from "../components/CognitiveConsole";
import NeuroPulse from "../components/NeuroPulse";
import MoodAura from "../components/MoodAura";
import NeuroCommand from "../components/NeuroCommand";
import NeuralDashboard from "../components/NeuralDashboard";
import NeuroStatChart from "../components/NeuroStatChart";
import NeuroCognitiveHUD from "../components/NeuroCognitiveHUD";  // This should match the correct relative path.
import MindPulse from "../components/MindPulse";
import "../index.css";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* === 🌌 Starfield Background === */}
      <div className="absolute inset-0 -z-10">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <main className="px-6 md:px-12 py-10 space-y-8">
        <motion.h1 
          className="text-center text-4xl md:text-6xl font-techno font-bold neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🌠 Welcome to the Future: MasterX Dashboard
        </motion.h1>

        <section className="grid md:grid-cols-3 gap-6">
          <motion.div className="glass p-4" whileHover={{ scale: 1.02 }}>
            <NeuroCognitiveHUD/>
          </motion.div>

          <motion.div className="glass p-4" whileHover={{ scale: 1.02 }}>
            <MindPulse />
          </motion.div>

          <motion.div className="glass p-4" whileHover={{ scale: 1.02 }}>
            <NeuroStatChart />
          </motion.div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <motion.div className="glass p-4" whileHover={{ scale: 1.02 }}>
            <NeuroPulse />
          </motion.div>

          <motion.div className="glass p-4" whileHover={{ scale: 1.02 }}>
            <MoodAura />
          </motion.div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <motion.div className="glass p-4" whileHover={{ scale: 1.02 }}>
            <CognitiveConsole />
          </motion.div>

          <motion.div className="glass p-4" whileHover={{ scale: 1.02 }}>
            <NeuroCommand />
          </motion.div>
        </section>

        <motion.div className="glass p-4" whileHover={{ scale: 1.02 }}>
          <NeuralDashboard />
        </motion.div>

        <motion.div className="glass p-4" whileHover={{ scale: 1.02 }}>
          <NeuroCardGrid />
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
