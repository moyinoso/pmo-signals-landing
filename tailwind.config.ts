import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0D",
        panel: "#101013",
        line: "rgba(237,232,223,0.08)",
        paper: "#EDE8DF",
        muted: "#9A958C",
        brass: "#C8A24B",
        brassdim: "#8A7136",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
