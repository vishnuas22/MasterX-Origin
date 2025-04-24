// frontend/src/pages/Dashboard.jsx

import React from "react";
import { motion } from "framer-motion";
import NeuroCardGrid from "../components/NeuroCardGrid";
import NeuroStatChart from "../components/NeuroStatChart";
import CognitiveConsole from "@/components/CognitiveConsole";
import NeuroCognitiveHUD from "../components/NeuroCognitiveHUD";



const Dashboard = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* 🚀 Title */}
      <motion.h1
        className="text-4xl font-extrabold tracking-tight mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        🧠 Welcome to MasterX Core Dashboard
      </motion.h1>

      <section className="mt-16">
        <CognitiveConsole />
      </section>

      <NeuroCognitiveHUD mode="Console" signal="Stable" status="Connected" />


      {/* 🧩 Neuro Card Grid */}
      <section className="mb-16">
        <NeuroCardGrid />
      </section>

      {/* 📊 Neural Stats Chart */}
      <section className="mb-24">
        <NeuroStatChart />
      </section>

      {/* ⚙️ Footer Placeholder */}
      <footer className="text-sm text-gray-400 text-center">
        Built with 💡 and Synaptic Fire by Ghost & MasterX
      </footer>
    </motion.div>
  );
};

export default Dashboard;
