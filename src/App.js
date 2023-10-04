import "./styles/App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Calender from "./components/Calender/Calender";
import { useSelector } from "react-redux";
import Alert from "./components/shared/component/Alert";

function App() {
  const alertData = useSelector((state) => {
    return state.alert.data;
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
      {alertData && <Alert data={alertData} />}
    </>
  );
}

export default App;
