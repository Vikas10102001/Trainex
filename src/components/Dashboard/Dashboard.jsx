import React from "react";
import AppLayout from "../shared/ui/AppLayout";
import "../../styles/dashboard.css";
import Status from "./Status";
import ClientAppointment from "./ClientAppointment";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const clients = useSelector((state) => state.client.data);
  const appointments = useSelector((state) => state.appointment.data);
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
      id: appointment.id,
      date: appointment.date,
      time: appointment.time,
    });
  }

  const clientAppointment = Object.values(clientInfoWithAppointments);
  return (
    <AppLayout>
      <Status clientAppointment={clientAppointment} />
      <ClientAppointment clientAppointment={clientAppointment} />
    </AppLayout>
  );
}
