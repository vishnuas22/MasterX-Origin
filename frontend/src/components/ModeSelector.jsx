import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MODES = [
  { label: "Study", emoji: "📚", value: "study" },
  { label: "Coding", emoji: "💻", value: "coding" },
  { label: "Creative", emoji: "🎨", value: "creative" },
  { label: "Deep Mode", emoji: "🧠", value: "deep" },
  { label: "Free Flow", emoji: "🌊", value: "freeflow" },
];

const ModeSelector = ({ onChange }) => {
  const [selectedMode, setSelectedMode] = useState(() => {
    return localStorage.getItem("chatMode") || "study";
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatMode", selectedMode);
    if (onChange) onChange(selectedMode);
  }, [selectedMode]);

  const current = MODES.find((m) => m.value === selectedMode);

  return (
    <div className="relative w-44">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full px-4 py-2 text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-lg flex items-center justify-between hover:bg-white/20 transition-all"
      >
        <span>
          {current.emoji} {current.label}
        </span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute z-50 mt-2 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl overflow-hidden"
        >
          {MODES.map((mode) => (
            <li
              key={mode.value}
              onClick={() => {
                setSelectedMode(mode.value);
                setOpen(false);
              }}
              className={`px-4 py-2 text-white cursor-pointer hover:bg-cyan-600 transition ${
                mode.value === selectedMode ? "bg-cyan-700/70" : ""
              }`}
            >
              {mode.emoji} {mode.label}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default ModeSelector;
