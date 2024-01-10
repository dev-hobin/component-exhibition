import "./styles/global.css";

import Button from "./primitives/Button";
import ThemeController from "./components/ThemeController";

function App() {
  return (
    <div>
      <ThemeController />

      <div>
        <Button>Primary</Button>
        <Button>Secondary</Button>
        <Button>Accent</Button>
      </div>
    </div>
  );
}

export default App;
