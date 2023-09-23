import "./App.css";
import PersonController from "./components/PersonController";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Person Generator</h1>
        <PersonController />
      </header>
    </div>
  );
}

export default App;
