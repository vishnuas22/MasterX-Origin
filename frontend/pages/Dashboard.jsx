// frontend/src/pages/Dashboard.jsx

import React from "react";
import { motion } from "framer-motion";
import NeuroCardGrid from "@/components/NeuroCardGrid";
import NeuroStatChart from "@/components/NeuroStatChart";

const Dashboard = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl font-extrabold tracking-tight mb-10 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        🧠 Welcome to MasterX Core Dashboard
      </motion.h1>

      {/* Card Grid */}
      <NeuroCardGrid />

      {/* Chart Section */}
      <div className="mt-12">
        <NeuroStatChart />
      </div>

      {/* Footer / Future Widgets Placeholder */}
      <div className="mt-16 text-sm text-gray-400 text-center">
        Built with 💡 and Synaptic Fire by Ghost & MasterX
      </div>
    </motion.div>
  );
};

export default Dashboard;
