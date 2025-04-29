import React, { useState, useEffect } from "react";
import NeuroCardGrid from "../components/NeuroCardGrid";
import CognitiveConsole from "../components/CognitiveConsole";
import NeuroPulse from "../components/NeuroPulse";
import MoodAura from "../components/MoodAura";
import NeuroCommand from "../components/NeuroCommand";
import NeuralDashboard from "../components/NeuralDashboard";
import NeuroStatChart from "../components/NeuroStatChart";
import NeuroCognitiveHUD from "../components/NeuroCognitiveHUD";
import MindPulse from "../components/MindPulse";
import { motion } from "framer-motion";
import "../index.css";

function Dashboard() {
  const [focusData, setFocusData] = useState([]);
  const [dopamineSurges, setDopamineSurges] = useState([]);
  const [missionProgress, setMissionProgress] = useState(0);
  const [currentState, setCurrentState] = useState({
    mood: "Flow State",
    energy: "High",
    motivation: "Maximum",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();

      setFocusData((prev) => [...prev.slice(-19), { time, focus: Math.random() * 100 }]);
      setDopamineSurges((prev) => [...prev.slice(-19), { time, intensity: Math.random() * 100 }]);
      setMissionProgress((prev) => (prev < 100 ? prev + 0.5 : 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const dummyStats = [
    { time: "10:00", focus: 78, dopamine: 65, progress: 20 },
    { time: "10:30", focus: 82, dopamine: 70, progress: 35 },
    { time: "11:00", focus: 85, dopamine: 75, progress: 50 },
    { time: "11:30", focus: 80, dopamine: 68, progress: 65 },
    { time: "12:00", focus: 88, dopamine: 72, progress: 80 },
    { time: "12:30", focus: 90, dopamine: 77, progress: 95 },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* 🌌 Starfield Background */}
      <div className="absolute inset-0 -z-10 animate-pulse-slow">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <main className="px-6 md:px-12 py-10 space-y-12">
        {/* 🚀 Futuristic Header */}
        <motion.h1 
          className="text-center text-5xl md:text-7xl font-techno font-extrabold neon-text bg-gradient-to-r from-cyan-300 via-purple-200 to-pink-100 bg-clip-text text-transparent animate-gradient-x"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          🌠 Welcome to the Future: MasterX Dashboard
        </motion.h1>

        {/* 🔥 Energy Core Section */}
        <motion.section 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate="show"
            variants={{
                hidden: {},
                show: {
                transition: { staggerChildren: 0.3 },
                },
            }}
            >
            {/* NeuroCognitiveHUD */}
            <motion.div 
                className="glass p-6" 
                variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
                }}
                whileHover={{ scale: 1.03, rotate: "0.5deg" }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <NeuroCognitiveHUD 
                focusData={focusData}
                dopamineSurges={dopamineSurges}
                missionProgress={missionProgress}
                currentState={currentState}
                />
            </motion.div>

            {/* MindPulse + MoodAura */}
            <motion.div 
                className="glass p-6 flex flex-col gap-6"
                variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
                }}
                whileHover={{ scale: 1.03, rotate: "0.5deg" }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <MindPulse />
                <MoodAura currentState={currentState.mood} />
            </motion.div>

            {/* NeuroStatChart */}
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
            </motion.div>
        </motion.section>

        {/* 🧠 Cognitive + Command Section */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div className="glass p-6" whileHover={{ scale: 1.03 }}>
            <CognitiveConsole />
          </motion.div>

          <motion.div className="glass p-6" whileHover={{ scale: 1.03 }}>
            <NeuroCommand />
          </motion.div>
        </section>

        {/* 🎛 Neural Systems */}
        <motion.div className="glass p-6" whileHover={{ scale: 1.03 }}>
          <NeuralDashboard />
        </motion.div>

        {/* 🧩 Neuro Grids */}
        <motion.div className="glass p-6" whileHover={{ scale: 1.03 }}>
          <NeuroPulse />
        </motion.div>

        <motion.div className="glass p-6" whileHover={{ scale: 1.03 }}>
          <NeuroCardGrid />
        </motion.div>
      </main>
    </div>
  );
}

export default Dashboard;
