import React, { useEffect, useState } from "react";
import AppointmentTable from "../../Appointment/AppointmentTable";
import ClientTable from "../../Client/ClientTable";
import DashboardMainHeader from "./DashboardMainHeader";

export default function DashboardMain({
  clientAppointment,
  filterObject,
  setFilterObject,
}) {
  const [switchAppointment, setSwitchAppointment] = useState(true);

  const [filterIsActive, setFilterIsActive] = useState(false);

  useEffect(() => {
    if (
      filterObject.name !== "" ||
      filterObject.appointmentDate !== "" ||
      filterObject.gender !== ""
    )
      setFilterIsActive(true);
    else setFilterIsActive(false);
  }, [filterObject]);

  const filteredClients = clientAppointment.filter((el) => {
    const { name, gender } = filterObject;
    return (
      (name === "" ||
        (el.firstName + " " + el.lastName)
          .toLowerCase()
          .startsWith(name.toLowerCase())) &&
      (gender === "" || el.gender.toLowerCase() === gender.toLowerCase())
    );
  });
  const filteredClientsWithAppointment = filteredClients.map((el) => {
    return { ...el, appointments: [] };
  });
  filteredClients.forEach((el, ind) => {
    el.appointments.forEach((appointment) => {
      if (
        filterObject.appointmentDate === "" ||
        appointment.date ===
          new Date(filterObject.appointmentDate).toLocaleDateString()
      ) {
        filteredClientsWithAppointment[ind].appointments.push(appointment);
      }
    });
    if (
      filterIsActive &&
      filteredClientsWithAppointment[ind].appointments.length === 0
    )
      delete filteredClientsWithAppointment[ind];
  });
  return (
    <div className="dashboard-main">
      <DashboardMainHeader
        filterObject={filterObject}
        setFilterObject={setFilterObject}
        switchAppointment={switchAppointment}
        setSwitchAppointment={setSwitchAppointment}
        filterIsActive={filterIsActive}
      />
      <div className="table-data">
        {switchAppointment ? (
          <AppointmentTable
            clientAppointment={filteredClientsWithAppointment}
          />
        ) : (
          <ClientTable />
        )}
      </div>
    </div>
  );
}
