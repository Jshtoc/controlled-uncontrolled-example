import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./components/ControlledComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledComponent />
      </header>
    </div>
  );
}

export default App;
