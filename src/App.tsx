import "./styles/global.css";

import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div data-theme="light">
      <Dropdown.Trigger>
        <Dropdown.Label>Theme</Dropdown.Label>
        <Dropdown.Content>
          <Dropdown.Item>Light</Dropdown.Item>
          <Dropdown.Item>Dark</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Trigger>

      <div>
        <Button>Primary</Button>
        <Button>Secondary</Button>
        <Button>Accent</Button>
      </div>
    </div>
  );
}

export default App;
