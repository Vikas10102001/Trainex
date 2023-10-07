import "./styles/App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Calender from "./components/Calender/Calender";
import { useSelector } from "react-redux";
import Alert from "./components/shared/component/Alert";

function App() {
  const clients = useSelector((state) => state.client.data);
  const appointments = useSelector((state) => state.appointment.data);

  const clientInfoWithAppointments = {};

  clients.forEach((client) => {
    const clientId = client.id;
    clientInfoWithAppointments[clientId] = {
      clientId,
      firstName: client.firstName,
      lastName: client.lastName,
      location: client.address,
      gender: client.gender,
      appointments: [],
    };
  });

  appointments.forEach((appointment) => {
    const clientId = appointment.client;
    const clientInfo = clientInfoWithAppointments[clientId];

    if (clientInfo) {
      clientInfo.appointments.push({
        id: appointment.id,
        date: appointment.date,
        time: appointment.time,
      });
    }
  });

  const clientAppointment = Object.values(clientInfoWithAppointments);
  const alertData = useSelector((state) => {
    return state.alert.data;
  });
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Dashboard clientAppointment={clientAppointment} />}
        />
        <Route
          path="/calendar"
          element={<Calender clientAppointment={clientAppointment} />}
        />
      </Routes>
      {alertData && <Alert data={alertData} />}
    </>
  );
}

export default App;
