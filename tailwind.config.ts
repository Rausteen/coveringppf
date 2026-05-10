import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070A",
          900: "#0A0D12",
          800: "#10141B",
          700: "#171C25",
          600: "#1F2632",
          500: "#2A3340",
        },
        accent: {
          DEFAULT: "#10B981", // emerald
          soft: "#34D399",
          deep: "#047857",
        },
        electric: {
          DEFAULT: "#3B82F6",
          soft: "#60A5FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(16,185,129,0.10), transparent 60%)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(16,185,129,0.18) 0%, rgba(5,7,10,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(16,185,129,0.25), 0 20px 60px -20px rgba(16,185,129,0.45)",
        card: "0 20px 60px -30px rgba(0,0,0,0.7)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.04)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
