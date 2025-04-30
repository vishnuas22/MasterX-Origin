// src/lib/dummyData.js

// High-resolution dummy stats for NeuroStatChart & NeuroStatGrid
export const dummyStats = [
    { label: "Neuro Sync", value: 92 },
    { label: "Cognitive Load", value: 71 },
    { label: "Focus Rate", value: 84 },
    { label: "Mood Index", value: 96 },
    { label: "Signal Strength", value: 77 },
    { label: "Processing Speed", value: 89 },
    { label: "Neural Flux", value: 68 },
    { label: "Decision Velocity", value: 75 },
    { label: "Dopamine Curve", value: 83 },
    { label: "Goal Alignment", value: 91 },
  ];
  
  // Line chart simulation over time (e.g., used for NeuroStatChart trends)
  export const neuroTrendData = [
    { time: "09:00", sync: 72, load: 65, mood: 88 },
    { time: "10:00", sync: 75, load: 67, mood: 86 },
    { time: "11:00", sync: 80, load: 69, mood: 87 },
    { time: "12:00", sync: 83, load: 72, mood: 90 },
    { time: "13:00", sync: 85, load: 74, mood: 91 },
    { time: "14:00", sync: 87, load: 76, mood: 93 },
    { time: "15:00", sync: 89, load: 78, mood: 95 },
  ];
  
  // Sample focusData for LineChart (NeuroCognitiveHUD)
  export const focusData = [
    { time: "T1", focus: 42 },
    { time: "T2", focus: 65 },
    { time: "T3", focus: 78 },
    { time: "T4", focus: 81 },
    { time: "T5", focus: 76 },
    { time: "T6", focus: 88 },
    { time: "T7", focus: 92 },
  ];
  
  // Dopamine surges mock
  export const dopamineSurges = [
    { time: "T1", intensity: 20 },
    { time: "T2", intensity: 40 },
    { time: "T3", intensity: 60 },
    { time: "T4", intensity: 50 },
    { time: "T5", intensity: 75 },
    { time: "T6", intensity: 90 },
    { time: "T7", intensity: 80 },
  ];
  