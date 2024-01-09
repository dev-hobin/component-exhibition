import { createTheme } from "@vanilla-extract/css";
import { vars } from "./contract.css";

export const lightThemeClass = createTheme(vars, {
  "color-scheme": "light",
  colors: {
    primary: "#491eff",
    "primary-content": "#d4dbff",
    secondary: "#ff41c7",
    "secondary-content": "#fff9fc",
    accent: "#00cfbd",
    "accent-content": "#00100d",
    neutral: "#2b3440",
    "neutral-content": "#d7dde4",
    "base-100": "#ffffff",
    "base-200": "#f2f2f2",
    "base-300": "#e5e6e6",
    "base-content": "#1f2937",
    info: "#00b3f0",
    "info-content": "#000000",
    success: "#00a96f",
    "success-content": "#000000",
    warning: "#ffc22d",
    "warning-content": "#000000",
    error: "#ff6f70",
    "error-content": "#000000",
  },
});
