import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict 3-color base palette per user request
        bg: "#F8F6F0",             // Soft Background (Warm off-white)
        primary: "#2A5C3D",        // Green (Deep natural forest green)
        fg: "#1C1C1C",             // Secondary (Very dark grey/charcoal for text)
        // Utility colors that derive from the 3 main colors to make UI work
        surface: "#FFFFFF",        // Pure white for raised cards
        border: "#EAE7E0",         // Slightly darker bg for borders
        muted: "#5C6B61",          // Tinted grey-green for secondary text
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(42, 92, 61, 0.08)",
        glow: "0 0 30px rgba(42, 92, 61, 0.15)",
        card: "0 4px 12px rgba(28, 28, 28, 0.04)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
        inter_italic: ["Inter Italic", "sans-serif"],
        ibm_italic: ["IBM Plex Sans Italic", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
