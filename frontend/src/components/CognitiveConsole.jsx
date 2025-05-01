// CognitiveConsole.jsx

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const CognitiveConsole = ({ entries = [] }) => {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries]);

  return (
    <motion.div
      className="w-full max-w-5xl h-[320px] mx-auto bg-zinc-950/90 border border-white/10 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <div
        ref={scrollRef}
        className="p-4 overflow-y-auto h-full space-y-2 text-green-300 font-mono text-sm"
      >
        {entries.map((entry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.02 }}
          >
            {entry.timestamp && (
              <span className="text-xs text-zinc-500 mr-2">
                [{entry.timestamp}]
              </span>
            )}
            {entry.message}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CognitiveConsole;
