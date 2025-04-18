// MindPulse.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MindPulse = ({ active = true }) => {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute bottom-6 right-6 z-50"
      initial={{ scale: 0.9 }}
      animate={{
        scale: pulse ? 1.2 : 0.9,
        opacity: pulse ? 1 : 0.4,
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="w-6 h-6 rounded-full bg-green-400 shadow-2xl shadow-green-400/40 border-2 border-white" />
    </motion.div>
  );
};

export default MindPulse;
