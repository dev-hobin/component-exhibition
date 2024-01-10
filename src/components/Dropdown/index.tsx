import * as style from "./style.css";

const Dropdown = () => {
  return (
    <details className={style.details}>
      <summary>open or close</summary>
      <ul>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </details>
  );
};

export default Dropdown;
