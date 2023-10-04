import React from "react";
import AppLayout from "../shared/ui/AppLayout";
import "../../styles/dashboard.css";
import Status from "./Status";
import ClientAppointment from "./ClientAppointment";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const clients = useSelector((state) => state.client.data);
  const appointments = useSelector((state) => state.appointment.data);

  // Create an object to store client data with appointments
  const clientInfoWithAppointments = {};

  // Populate clientInfoWithAppointments with client data
  clients.forEach((client) => {
    const clientId = client.id;
    clientInfoWithAppointments[clientId] = {
      clientId,
      firstName: client.firstName,
      lastName: client.lastName,
      location: client.address,
      appointments: [],
    };
  });

  // Populate clientInfoWithAppointments with appointments
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

  // Convert the object into an array of client data
  const clientAppointment = Object.values(clientInfoWithAppointments);
  console.log(clientAppointment);
  return (
    <AppLayout>
      <Status clientAppointment={clientAppointment} />
      <ClientAppointment clientAppointment={clientAppointment} />
    </AppLayout>
  );
}
