import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  size: {
    1: "0.25rem",
    2: "0.5rem",
    3: "1rem",
    4: "1.25rem",
    5: "1.5rem",
    6: "1.75rem",
    7: "2rem",
    8: "3rem",
    9: "4rem",
    10: "5rem",
  },
});
