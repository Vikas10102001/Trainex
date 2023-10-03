import React from "react";
import AppLayout from "../shared/AppLayout";
import appointments from "../../data/apointment.json";
import clients from "../../data/client.json";
import "../../styles/dashboard.css";
import Status from "./Status";
import ClientAppointment from "./ClientAppointment";

const clientInfoWithAppointments = {};

for (const appointment of appointments) {
  const clientId = appointment.client;

  if (!clientInfoWithAppointments[clientId]) {
    clientInfoWithAppointments[clientId] = {
      clientId: clientId,
      firstName: clients[clientId - 1].firstName,
      lastName: clients[clientId - 1].lastName,
      location: clients[clientId - 1].address,
      appointments: [],
    };
  }

  clientInfoWithAppointments[clientId].appointments.push({
    date: appointment.date,
    time: appointment.time,
  });
}

const clientAppointment = Object.values(clientInfoWithAppointments);

console.log(clientAppointment);

export default function Dashboard() {
  return (
    <AppLayout>
      <Status clientAppointment={clientAppointment} />
      <ClientAppointment clientAppointment={clientAppointment} />
    </AppLayout>
  );
}
