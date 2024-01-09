import { createTheme } from "@vanilla-extract/css";
import { vars } from "./contract.css";

export const cupcakeThemeClass = createTheme(vars, {
  "color-scheme": "light",
  colors: {
    primary: "#65c3c8",
    "primary-content": "#030e0f",
    secondary: "#ef9fbc",
    "secondary-content": "#14090d",
    accent: "#eeaf3a",
    "accent-content": "#140b01",
    neutral: "#291334",
    "neutral-content": "#d0cad3",
    "base-100": "#faf7f5",
    "base-200": "#efeae6",
    "base-300": "#e7e2df",
    "base-content": "#291334",
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
