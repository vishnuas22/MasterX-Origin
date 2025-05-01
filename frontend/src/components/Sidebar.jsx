// MasterX/frontend/src/components/Sidebar.jsx

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import classNames from "classnames";

const Sidebar = ({
  isOpen = true,
  onClose,
  learningModes = [],
  selectedMode,
  onModeChange,
  additionalTools = [],
  version = "v3.0 · NeuroUI"
}) => {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ duration: 0.4 }}
      className={classNames(
        "fixed z-50 top-0 left-0 h-screen w-64 px-6 py-6 bg-white/10 border-r border-white/20 shadow-2xl backdrop-blur-xl",
        "flex flex-col justify-between"
      )}
    >
      {/* Top Section */}
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400">MasterX</h1>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-cyan-300 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Mode Selector */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/70">Mode</span>
            <ChevronDown className="h-4 w-4 text-white/50" />
          </div>
          <select
            value={selectedMode}
            onChange={(e) => onModeChange?.(e.target.value)}
            className="w-full p-2 bg-white/10 border border-white/20 rounded-xl text-sm text-white focus:outline-none"
          >
            {learningModes.map((mode) => (
              <option key={mode} className="bg-black text-white">
                {mode}
              </option>
            ))}
          </select>
        </div>

        {/* Tool Buttons */}
        <div className="flex flex-col gap-4 mt-8">
          <button className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition">
            <Search size={18} /> Search
          </button>

          {additionalTools.map((tool, index) => (
            <button
              key={index}
              className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition"
            >
              {tool.icon} {tool.label}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-white/30">{version}</div>
    </motion.aside>
  );
};

export default Sidebar;
