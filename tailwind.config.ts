import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{json,ts}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F2EA",
        beige: "#EDE2D1",
        mocha: "#9D7D5D",
        walnut: "#5F4A3A",
        olive: "#7B8D66",
        charcoal: "#1F1D1B",
        gold: "#C7A86F"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
