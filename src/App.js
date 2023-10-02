import "./styles/App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ margin: 0 }}>
      <Dashboard />
    </div>
  );
}

export default App;
