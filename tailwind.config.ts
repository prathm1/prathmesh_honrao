import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2dd4bf",
          light: "#5eead4",
          dark: "#14b8a6",
          50: "rgba(45,212,191,0.08)",
          100: "rgba(45,212,191,0.16)",
        },
        // Deep matte-navy palette sampled from the presentation-room wall (#263d58)
        bg: {
          DEFAULT: "#243b57",
          dark: "#1b2e45",
          card: "rgba(255,255,255,0.06)",
        },
        ink: {
          DEFAULT: "#eef3f9",
          light: "#c6d4e2",
          muted: "#90a3b9",
        },
        insurance: "#5ec9c6",
        automotive: "#6aa9e0",
        banking: "#e9a86a",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-ibm-plex-serif)", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
