import React, { useEffect, useState } from "react";
import AppLayout from "../shared/ui/AppLayout";
import "../../styles/dashboard.css";
import ClientAppointment from "./ClientAppointment";
import DashboardTop from "./Top/DashboardTop";

export default function Dashboard({ clientAppointment }) {
  const initialFilter = {
    name: "",
    appointmentDate: "",
    gender: "",
  };
  const [filterObject, setFilterObject] = useState(initialFilter);

  return (
    <AppLayout>
      <DashboardTop clientAppointment={clientAppointment} />
      <ClientAppointment
        clientAppointment={clientAppointment}
        filterObject={filterObject}
        setFilterObject={setFilterObject}
      />
    </AppLayout>
  );
}
