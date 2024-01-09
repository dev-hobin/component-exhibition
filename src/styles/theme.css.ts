import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";

type ThemeContract = {
  "color-scheme": string;
  colors: {
    primary: string;
    "primary-content": string;
    secondary: string;
    "secondary-content": string;
    accent: string;
    "accent-content": string;
    neutral: string;
    "neutral-content": string;
    "base-100": string;
    "base-200": string;
    "base-300": string;
    "base-content": string;
    info: string;
    "info-content": string;
    success: string;
    "success-content": string;
    warning: string;
    "warning-content": string;
    error: string;
    "error-content": string;
  };
};

export const contract: ThemeContract = {
  "color-scheme": "color-scheme",
  colors: {
    primary: "primary",
    "primary-content": "primary-content",
    secondary: "secondary",
    "secondary-content": "secondary-content",
    accent: "accent",
    "accent-content": "accent-content",
    neutral: "neutral",
    "neutral-content": "neutral-content",
    "base-100": "base-100",
    "base-200": "base-200",
    "base-300": "base-300",
    "base-content": "base-content",
    info: "info",
    "info-content": "info-content",
    success: "success",
    "success-content": "success-content",
    warning: "warning",
    "warning-content": "warning-content",
    error: "error",
    "error-content": "error-content",
  },
};

export const lightTheme: ThemeContract = {
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
};

export const darkTheme: ThemeContract = {
  "color-scheme": "dark",
  colors: {
    primary: "#7582ff",
    "primary-content": "#050617",
    secondary: "#ff71cf",
    "secondary-content": "#190211",
    accent: "#00c7b5",
    "accent-content": "#000e0c",
    neutral: "#2a323c",
    "neutral-content": "#a6adbb",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#a6adbb",
    info: "#00b3f0",
    "info-content": "#000000",
    success: "#00a96f",
    "success-content": "#000000",
    warning: "#ffc22d",
    "warning-content": "#000000",
    error: "#ff6f70",
    "error-content": "#000000",
  },
};

export const cupcakeTheme: ThemeContract = {
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
};

export const vars = createGlobalThemeContract<ThemeContract>(contract);

// Default Theme : "light"
createGlobalTheme(":root", vars, lightTheme);

// Light Theme
createGlobalTheme('[data-theme="light"]', vars, lightTheme);

// Dark Theme
createGlobalTheme('[data-theme="dark"]', vars, darkTheme);

// Cupcake Theme
createGlobalTheme('[data-theme="cupcake"]', vars, cupcakeTheme);
