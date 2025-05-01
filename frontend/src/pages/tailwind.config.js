module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {

    
    extend: {
      colors: {
        'neon-green': '#39ff14',
        'neon-blue': '#00ffff',
        'neon-pink': '#ff6ec7',
      },

      extend: {
        keyframes: {
          twinkle: {
            "0%, 100%": { opacity: 0.3 },
            "50%": { opacity: 1 },
          },
        },
        animation: {
          twinkle: "twinkle 3s infinite",
        },
      },

      extend: {
        animation: {
          mood: "gradientShift 10s ease infinite",
        },
        keyframes: {
          gradientShift: {
            "0%, 100%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
          },
        },
      },
      
      
      fontFamily: {
        techno: ['Orbitron', 'sans-serif'],
        futuristic: ['Orbitron', 'system-ui'], // extra alias if you want
      },
      backgroundImage: {
        space: "url('/src/assets/starfield.gif')",
      },
      animation: {
        spinSlow: 'spin 30s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [],
};
