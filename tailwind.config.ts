import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1116",
          surface: "#161B22",
          raised: "#1D242E",
          line: "#2A3341",
        },
        paper: {
          DEFAULT: "#E6E9EF",
          muted: "#8B93A1",
          faint: "#5B6472",
        },
        amber: {
          DEFAULT: "#E8A33D",
          soft: "#F0BE72",
          dim: "#7A5A23",
        },
        teal: {
          DEFAULT: "#1F7A6C",
          bright: "#2FA491",
          dim: "#12332E",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.6rem, 2.6vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(230,233,239,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(230,233,239,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "42px 42px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(230,233,239,0.06) inset",
      },
    },
  },
  plugins: [],
} satisfies Config;
