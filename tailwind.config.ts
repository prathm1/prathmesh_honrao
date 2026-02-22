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
          DEFAULT: "#0f766e",
          light: "#14b8a6",
          dark: "#0d5f58",
          50: "#f0fdfa",
          100: "#ccfbf1",
        },
        bg: {
          DEFAULT: "#f8f4ec",
          dark: "#eae6de",
          card: "#fffdf8",
        },
        ink: {
          DEFAULT: "#122620",
          light: "#2d4a43",
          muted: "#56746e",
        },
        insurance: "#2b7a78",
        automotive: "#3f88c5",
        banking: "#d07c3a",
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
  plugins: [],
};

export default config;
