import React, { useState, useEffect } from "react";
import NeuroCognitiveHUD from "./NeuroCognitiveHUD";

const generateDataPoint = (key, min, max) => ({
  time: new Date().toLocaleTimeString().slice(0, 8),
  [key]: Math.floor(Math.random() * (max - min + 1)) + min,
});

const NeuroCognitiveContainer = () => {
  const [focusData, setFocusData] = useState([]);
  const [dopamineSurges, setDopamineSurges] = useState([]);
  const [missionProgress, setMissionProgress] = useState(0);
  const [currentState, setCurrentState] = useState({ mood: "Flow State" });

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusData((prev) => [...prev.slice(-9), generateDataPoint("focus", 50, 95)]);
      setDopamineSurges((prev) => [...prev.slice(-9), generateDataPoint("intensity", 30, 100)]);
      setMissionProgress((prev) => Math.min(prev + Math.random() * 1.5, 100));

      // Optional: Change mood randomly
      const moods = ["Flow State", "Laser Mode", "Cognitive Sync", "Recharge"];
      if (Math.random() < 0.05) {
        setCurrentState({ mood: moods[Math.floor(Math.random() * moods.length)] });
      }
    }, 1200); // Update every 1.2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <NeuroCognitiveHUD
      focusData={focusData}
      dopamineSurges={dopamineSurges}
      missionProgress={missionProgress}
      currentState={currentState}
    />
  );
};

export default NeuroCognitiveContainer;
