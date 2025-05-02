// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure all component files are included
  ],
  theme: {
    extend: {

        backgroundImage: {
          'masterx-bg': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        },

      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },

      

      boxShadow: {
        glow: '0 0 20px rgba(0, 255, 255, 0.2)',
      },
      backdropBlur: {
        lg: '20px',
      },
      
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
