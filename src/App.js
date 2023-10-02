import "./styles/App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Calender from "./components/Calender/Calender";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/calender" element={<Calender />} />
    </Routes>
  );
}

export default App;
