import { ComponentPropsWithoutRef } from "react";
import * as style from "./style.css";

export type ButtonProps = ComponentPropsWithoutRef<"button">;
const Button = (props: ButtonProps) => {
  return <button type="button" className={style.button} {...props} />;
};

export default Button;
