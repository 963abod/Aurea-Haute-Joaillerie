import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0B0B0C",
          pure: "#050505",
          soft: "#121214",
        },
        onyx: {
          DEFAULT: "#161618",
          light: "#1F1F23",
          border: "#2A2A2E",
        },
        champagne: {
          gold: "#C5A059",
          hover: "#D4B07B",
          light: "#E8D8A6",
          pale: "#F4ECDC",
          deep: "#8A6B29",
        },
        ivory: {
          DEFAULT: "#F9F6F0",
          warm: "#FDFBF7",
          muted: "#EADDCF",
        },
        charcoal: {
          DEFAULT: "#2A2A2E",
          muted: "#5A5A62",
        }
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "var(--font-cormorant)", "Georgia", "serif"],
        arabic: ["var(--font-naskh)", "Amiri", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C5A059 0%, #F4ECDC 50%, #8A6B29 100%)",
        "gold-shimmer": "linear-gradient(90deg, #8A6B29 0%, #C5A059 25%, #F4ECDC 50%, #C5A059 75%, #8A6B29 100%)",
        "dark-radial": "radial-gradient(circle at center, #161618 0%, #0B0B0C 100%)",
      },
      animation: {
        "shimmer": "shimmer 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
