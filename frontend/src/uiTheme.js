// src/uiTheme.js

const uiTheme = {
    moodColors: {
      focused: "#22c55e",   // Emerald
      relaxed: "#60a5fa",   // Sky
      creative: "#c084fc",  // Purple
      tired: "#f87171",     // Red
      default: "#d1d5db",   // Zinc
    },
  
    focusLevels: {
      High: "#34d399",      // Green
      Medium: "#fbbf24",    // Amber
      Low: "#f87171",       // Red
    },
  
    backgrounds: {
      dashboard: "bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]",
      console: "bg-zinc-800/70",
    },
  
    fonts: {
      title: "font-extrabold tracking-tight text-4xl",
      body: "font-normal text-base",
    },
  
    transition: {
      default: { duration: 0.8, ease: "easeOut" },
      chart: { duration: 1.2, ease: "easeInOut" },
    }
  };
  
  export default uiTheme;
  