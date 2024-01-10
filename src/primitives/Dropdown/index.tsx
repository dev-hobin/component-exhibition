import { ReactNode } from "react";
import * as style from "./style.css";

type TriggerProps = { open?: boolean; children: ReactNode };
const Trigger = (props: TriggerProps) => {
  return (
    <details
      open={props.open}
      onClick={(ev) => {
        if (props.open !== undefined) ev.preventDefault();
      }}
      className={style.trigger}
    >
      {props.children}
    </details>
  );
};

type LabelProps = { children: ReactNode };
const Label = (props: LabelProps) => {
  return <summary className={style.label}>{props.children}</summary>;
};

type ContentProps = { children: ReactNode };
const Content = (props: ContentProps) => {
  return <ul className={style.content}>{props.children}</ul>;
};

type ItemProps = { children: ReactNode; onClick?: () => void };
const Item = (props: ItemProps) => {
  return (
    <li onClick={props.onClick} className={style.item}>
      {props.children}
    </li>
  );
};

const Dropdown = Object.assign({}, { Trigger, Label, Content, Item });

export default Dropdown;
