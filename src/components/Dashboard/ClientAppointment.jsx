import React, { useState } from "react";
import AppointmentTable from "../Appointment/AppointmentTable";
import ClientTable from "../Client/ClientTable";

export default function ClientAppointment({ clientAppointment }) {
  const [switchAppointment, setSwitchAppointment] = useState(true);
  const handleClientSwitch = () => {
    setSwitchAppointment(false);
  };
  const hanldeAppointmentSwitch = () => {
    setSwitchAppointment(true);
  };
  return (
    <div className="dashboard-main">
      <div className="header">
        <div className="switch">
          <button onClick={handleClientSwitch}>Client</button>
          <button onClick={hanldeAppointmentSwitch}>Appointment</button>
        </div>
      </div>
      <div className="table-data">
        {switchAppointment ? (
          <AppointmentTable clientAppointment={clientAppointment} />
        ) : (
          <ClientTable />
        )}
      </div>
    </div>
  );
}
