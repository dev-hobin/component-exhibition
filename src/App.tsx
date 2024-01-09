import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Dropdown />
      <div data-theme="white">
        <Button>Primary</Button>
        <Button>Secondary</Button>
        <Button>Accent</Button>
      </div>
      <div data-theme="black">
        <Button>Primary</Button>
        <Button>Secondary</Button>
        <Button>Accent</Button>
      </div>
      <div data-theme="cupcake">
        <Button>Primary</Button>
        <Button>Secondary</Button>
        <Button>Accent</Button>
      </div>
    </div>
  );
}

export default App;
