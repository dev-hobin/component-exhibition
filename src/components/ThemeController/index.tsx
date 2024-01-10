import { useEffect, useState } from "react";
import Dropdown from "../../primitives/Dropdown";

type Theme = "light" | "dark" | "cupcake";

const ThemeController = () => {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    const body = document.body;
    if (theme === undefined) body.removeAttribute("data-theme");
    else body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Dropdown.Trigger>
      <Dropdown.Label>Theme</Dropdown.Label>
      <Dropdown.Content>
        <Dropdown.Item onClick={() => setTheme("light")}>Light</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("dark")}>Dark</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("cupcake")}>
          Cupcake
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Trigger>
  );
};

export default ThemeController;
