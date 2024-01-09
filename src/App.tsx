import "./styles/global.css";

import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div>
      <Dropdown />
      <div>
        <Button>Primary</Button>
        <Button>Secondary</Button>
        <Button>Accent</Button>
      </div>
      <div>
        <Button>Primary</Button>
        <Button>Secondary</Button>
        <Button>Accent</Button>
      </div>
      <div>
        <Button>Primary</Button>
        <Button>Secondary</Button>
        <Button>Accent</Button>
      </div>
    </div>
  );
}

export default App;
