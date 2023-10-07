import React, { useEffect, useState } from "react";
import AppointmentTable from "../Appointment/AppointmentTable";
import ClientTable from "../Client/ClientTable";
import { EditCalendar, FilterList, Person } from "@mui/icons-material";
import FilterMenu from "./FilterMenu";

export default function ClientAppointment({
  clientAppointment,
  filterObject,
  setFilterObject,
}) {
  const [switchAppointment, setSwitchAppointment] = useState(true);
  const [filterMenuVisiblity, setFilterMenuVisiblity] = useState(false);

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
      <div className="header">
        <div className="switch">
          <button
            className={`${!switchAppointment ? "active" : ""}`}
            onClick={handleClientSwitch}
          >
            <Person />
            Client
          </button>
          <button
            onClick={hanldeAppointmentSwitch}
            className={`${switchAppointment ? "active" : ""}`}
          >
            <EditCalendar />
            Appointment
          </button>
        </div>
        <div className="filter">
          <input
            type="search"
            placeholder="Search by name"
            onChange={handleSearchOnChange}
            value={filterObject.name}
          />
          <div className="filter-container">
            <FilterList
              onClick={hanldeOnClickFilterMenu}
              style={{ color: `${filterIsActive ? "#007bffe" : "black"}` }}
            />
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
          <AppointmentTable
            clientAppointment={filteredClientsWithAppointment}
          />
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
