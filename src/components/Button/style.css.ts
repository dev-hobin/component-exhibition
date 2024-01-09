import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const button = style({
  background: vars.colors.primary,
  color: vars.colors["primary-content"],
});
