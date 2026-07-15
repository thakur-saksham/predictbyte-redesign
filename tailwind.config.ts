import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        card: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
        primary: "#FFFFFF",
        secondary: "#B4B4B4",
        accent: "#4F8CFF",
        glow: "rgba(79,140,255,.25)",
      },
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        nav: "1400px",
        hero: "760px",
        copy: "560px",
      },
      transitionTimingFunction: {
        "power4": "cubic-bezier(0.25, 1, 0.5, 1)",
        "expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        bounceSlow: "bounceSlow 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
