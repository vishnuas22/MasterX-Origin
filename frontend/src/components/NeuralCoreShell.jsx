import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Activity, Zap, Eye, Layers } from "lucide-react";

const NeuralCoreShell = ({ userName = "Ghost", mission = "Activate MindNet", dopamine = 0.7, focus = "Ultra", mood = "charged" }) => {
  const moodColors = {
    focused: "#00ffa2",
    charged: "#00f0ff",
    calm: "#8884ff",
    default: "#888888",
  };

  const moodColor = moodColors[mood] || moodColors.default;

  return (
    <div className="min-h-screen bg-black text-white font-techno relative overflow-hidden">
      {/* Glowing Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#00ffa2]/20 blur-3xl rounded-full -top-32 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#00f0ff]/20 blur-3xl rounded-full -bottom-32 -right-20 animate-pulse"></div>
      </div>

      {/* Header HUD */}
      <motion.header
        className="w-full px-10 py-6 flex justify-between items-center glass border-b border-white/10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-2xl font-bold neon-text">🧠 {userName}'s Neural OS</div>
        <div className="text-sm text-white/70">Mission: <span className="text-cyan-400">{mission}</span></div>
      </motion.header>

      {/* Main Panel */}
      <main className="px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 z-10 relative">
        {/* Dopamine Panel */}
        <motion.section
          className="glass p-8 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <Zap className="text-neon-green" size={20} /> Dopamine Level
          </h2>
          <div className="w-full bg-white/10 h-6 rounded-full overflow-hidden">
            <motion.div
              className="h-full"
              style={{ backgroundColor: moodColor }}
              animate={{ width: `${dopamine * 100}%` }}
              transition={{ duration: 1.2 }}
            />
          </div>
          <p className="mt-2 text-sm opacity-60">Real-time dopamine flux visualized.</p>
        </motion.section>

        {/* Mood & Focus */}
        <motion.section
          className="glass p-8 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <Eye className="text-neon-blue" size={20} /> Mood & Focus
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Mood: <span style={{ color: moodColor }}>{mood}</span></p>
            <p className="text-sm">Focus: <span className="text-green-400">{focus}</span></p>
          </div>
        </motion.section>

        {/* Neural Metrics */}
        <motion.section
          className="glass p-8 rounded-2xl border border-white/10 col-span-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h2 className="text-xl mb-6 flex items-center gap-2">
            <Cpu className="text-pink-400" size={20} /> Neural Analytics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Cognition", Icon: Brain },
              { label: "Activity", Icon: Activity },
              { label: "Layers", Icon: Layers },
              { label: "Signals", Icon: Zap },
            ].map(({ label, Icon }) => (
              <div key={label} className="text-center">
                <Icon size={28} className="mx-auto mb-2 text-neon-pink" />
                <div className="text-sm text-white/70">{label}</div>
                <div className="mt-1 text-white font-bold">{Math.floor(Math.random() * 100)}%</div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer Console */}
      <footer className="w-full p-4 text-center text-xs text-white/40 border-t border-white/10 glass">
        MasterX Neural UI • Build v1.0 • {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default NeuralCoreShell;
