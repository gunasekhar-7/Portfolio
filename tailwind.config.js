/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-base": "#0a0a0f",
        "surface-raised": "#0d0e15",
        "surface": "#131318",
        "surface-dim": "#131318",
        "surface-bright": "#39383e",
        "surface-container-lowest": "#0e0e13",
        "surface-container-low": "#1b1b20",
        "surface-container": "#1f1f25",
        "surface-container-high": "#2a292f",
        "surface-container-highest": "#35343a",
        "surface-glass": "rgba(13, 14, 21, 0.72)",
        "border-glass": "rgba(255, 255, 255, 0.08)",
        "border-glass-hover": "rgba(56, 189, 248, 0.35)",
        "glow-cyan": "rgba(56, 189, 248, 0.15)",
        "glow-violet": "rgba(99, 102, 241, 0.2)",
        "text-primary": "#f8fafc",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",
        "background": "#131318",
        "on-surface": "#e4e1e9",
        "on-surface-variant": "#c7c4d7",
        "primary": "#c0c1ff",
        "on-primary": "#1000a9",
        "primary-container": "#8083ff",
        "on-primary-container": "#0d0096",
        "inverse-primary": "#494bd6",
        "secondary": "#7bd0ff",
        "secondary-container": "#00a6e0",
        "tertiary": "#ddb7ff",
        "tertiary-container": "#b76dff",
        "cyber-cyan": "#38bdf8",
        "cyber-indigo": "#6366f1",
        "cyber-purple": "#a855f7"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
        "display": ["Inter", "system-ui", "sans-serif"],
        "technical": ["'Space Mono'", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px"
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem"
      },
      boxShadow: {
        "glow-cyan": "0 0 25px rgba(56, 189, 248, 0.25)",
        "glow-primary": "0 0 25px rgba(99, 102, 241, 0.3)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
      }
    },
  },
  plugins: [],
}
