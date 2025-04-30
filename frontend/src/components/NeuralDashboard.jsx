// Updated NeuroDashboard.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Target, Zap, Gauge, Clock9 } from "lucide-react";
import CognitiveConsole from "../components/CognitiveConsole";
import NeuroCognitiveHUD from "../components/NeuroCognitiveHUD";
import MindPulse from "../components/MindPulse";
import MoodAura from "../components/MoodAura";
import NeuroCardGrid from "../components/NeuroCardGrid";
import NeuroPulse from "../components/NeuroPulse";
import NeuroCommand from "../components/NeuroCommand";
import NeuroStatChart from "@/components/NeuroStatChart";
import NeuroStatGrid from "@/components/NeuroStatGrid";
import FuturisticTimeline from "@/components/FuturisticTimeline";
import { dummyStats, dummyTimelineEvents } from "@/lib/dummyData";

const Dashboard = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Simulate async fetch from backend (replace with real API call later)
    setTimeout(() => {
      setTimelineData(dummyTimelineEvents);
    }, 500);
  }, []);

  return (
    <motion.section
      className="grid grid-cols-1 xl:grid-cols-3 gap-8 p-8"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.div
        className="glass col-span-2 p-6"
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="flex items-center gap-2 text-cyan-400 mb-4">
          <Zap className="animate-pulse" /> <h2 className="text-lg font-bold">Cognitive Sync</h2>
        </div>
        <NeuroCognitiveHUD/>
      </motion.div>

      <motion.div
        className="glass p-6"
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.95 },
          show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
        }}
        whileHover={{ scale: 1.03, rotate: "0.5deg" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <NeuroStatChart data={dummyStats} />
        <NeuroStatGrid />
      </motion.div>

      <motion.div
        className="glass p-6 col-span-3"
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 text-emerald-400 mb-4">
          <Clock9 /> <h2 className="text-lg font-bold">NeuroLog Timeline</h2>
        </div>
        <FuturisticTimeline events={timelineData} />
      </motion.div>

      <motion.div
        className="glass col-span-3 p-6"
        whileHover={{ scale: 1.01 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <CognitiveConsole />
      </motion.div>
    </motion.section>
  );
};

export default Dashboard;
