import "./reset.css";
import "./utilities.css";

import { globalStyle, assignVars } from "@vanilla-extract/css";
import { vars as themeVars, darkTheme } from "./theme.css";

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(themeVars, darkTheme),
    },
  },
});
