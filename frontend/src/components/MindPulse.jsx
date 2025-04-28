// src/components/MindPulse.jsx
import React, { useEffect } from "react";

const MindPulse = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const stars = document.getElementById("starfield");
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      stars.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {/* Starfield Layer */}
      <div
        id="starfield"
        className="absolute top-0 left-0 w-full h-full opacity-50 animate-pulse"
      >
        <div className="w-full h-full bg-black relative overflow-hidden">
          {/* Star elements */}
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random(),
                animation: `twinkle ${Math.random() * 4 + 2}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Neural Energy Waves */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-screen pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-cyan-500 via-emerald-400 to-fuchsia-600 animate-pulse blur-3xl" />
      </div>

      {/* Overlay subtle moving waves */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            fill="none"
            stroke="cyan"
            strokeWidth="0.5"
            d="M0 300 Q400 200 800 300 T1600 300"
            className="animate-pulse"
          />
          <path
            fill="none"
            stroke="violet"
            strokeWidth="0.5"
            d="M0 320 Q400 400 800 320 T1600 320"
            className="animate-pulse"
          />
        </svg>
      </div>
    </div>
  );
};

export default MindPulse;
