/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          primary: "#0B3D91", // NASA blue
          secondary: "#FC3D21", // NASA red
          accent: "#4D7AB9", // Light blue
          dark: "#0A0F29", // Deep space
          light: "#E6F1FF", // Star light
          nebula: "#7B3F87", // Purple nebula
          cosmic: "#1E2761", // Cosmic blue
          stardust: "#FFD700", // Gold stardust
          meteor: "#FF6B6B", // Meteor red
          orbit: "#4ECDC4", // Orbit teal
        },
        dubai: {
          gold: "#D4AF37",
          sand: "#E2CA9B",
          skyline: "#2C3E50",
          luxury: "#B8860B",
        },
      },
      fontFamily: {
        futuristic: ["var(--font-geist-sans)", "sans-serif"],
        cosmic: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "space-gradient": "linear-gradient(to right, var(--tw-gradient-stops))",
        "cosmic-grid":
          "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.space.stardust"), 0 0 20px theme("colors.space.stardust")',
        cosmic: "0 0 15px rgba(77, 122, 185, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
