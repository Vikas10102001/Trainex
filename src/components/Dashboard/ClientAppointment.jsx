import React, { useState } from "react";
import AppointmentTable from "../Appointment/AppointmentTable";
import ClientTable from "../Client/ClientTable";
import { FilterList } from "@mui/icons-material";
import FilterMenu from "./FilterMenu";

export default function ClientAppointment({
  clientAppointment,
  filterObject,
  setFilterObject,
}) {
  console.log(clientAppointment);
  const [switchAppointment, setSwitchAppointment] = useState(true);
  const [filterMenuVisiblity, setFilterMenuVisiblity] = useState(false);
  const hanldeOnClickFilterMenu = () => {
    setFilterMenuVisiblity(!filterMenuVisiblity);
  };
  const handleSearchOnChange = (e) => {
    setFilterObject((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const handleClientSwitch = () => {
    setSwitchAppointment(false);
  };
  const hanldeAppointmentSwitch = () => {
    setSwitchAppointment(true);
  };
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
  filteredClients.forEach((el) => {
    const filteredAppointment = el.appointments.filter((appointment) => {
     
      return (
        filterObject.appointmentDate === "" ||
        appointment.date ===
          new Date(filterObject.appointmentDate).toLocaleDateString()
      );
    });
    el.appointments = filteredAppointment;
  });


  return (
    <div className="dashboard-main">
      <div className="header">
        <div className="switch">
          <button onClick={handleClientSwitch}>Client</button>
          <button onClick={hanldeAppointmentSwitch}>Appointment</button>
        </div>
        <div className="filter">
          <input
            type="search"
            placeholder="Search by name"
            onChange={handleSearchOnChange}
            value={filterObject.name}
          />
          <div className="filter-container">
            <FilterList onClick={hanldeOnClickFilterMenu} />
            {filterMenuVisiblity && (
              <FilterMenu
                filterObject={filterObject}
                setFilterObject={setFilterObject}
                setFilterMenuVisiblity={setFilterMenuVisiblity}
              />
            )}
          </div>
        </div>
      </div>
      <div className="table-data">
        {switchAppointment ? (
          <AppointmentTable clientAppointment={filteredClients} />
        ) : (
          <ClientTable />
        )}
      </div>
      {filterMenuVisiblity && (
        <div
          className="filter-background"
          onClick={() => {
            setFilterMenuVisiblity(false);
          }}
        ></div>
      )}
    </div>
  );
}
