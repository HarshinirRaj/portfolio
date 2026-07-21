import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0E14",
          900: "#0F1520",
          800: "#161D2B",
          700: "#1E2738",
          line: "#232B3D",
        },
        paper: {
          50: "#F6F7F9",
          0: "#FFFFFF",
          line: "#E3E7EE",
          muted: "#EEF0F4",
        },
        signal: {
          amber: "#E7B33E",
          cyan: "#46C2D9",
          green: "#3DDC84",
          red: "#E5566D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-cell": "40px 40px",
      },
      keyframes: {
        flow: {
          to: { strokeDashoffset: "-200" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        drop: {
          "0%": { transform: "translateY(-4px)", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { transform: "translateY(28px)", opacity: "0" },
        },
        "page-flip": {
          from: { opacity: "0", transform: "rotateY(-10deg) scale(0.98)" },
          to: { opacity: "1", transform: "rotateY(0deg) scale(1)" },
        },
      },
      animation: {
        flow: "flow 3.2s linear infinite",
        blink: "blink 2.4s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
        drop: "drop 1.6s ease-in-out infinite",
        "page-flip": "page-flip 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};
export default config;
