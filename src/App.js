import "./App.css";
import Hotkeys from "./WithHotkeys";
import Vanilla from "./WithVanillaJavascript";

Hotkeys();
Vanilla();

function App() {
  return (
    <div className="App">This is react website using keyboard shortcuts</div>
  );
}

export default App;
