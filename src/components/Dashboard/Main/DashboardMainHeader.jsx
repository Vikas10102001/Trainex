import React, { useState } from "react";
import { EditCalendar, FilterList, Person } from "@mui/icons-material";
import FilterMenu from "../FilterMenu";

export default function DashboardMainHeader({
  switchAppointment,
  setSwitchAppointment,
  setFilterObject,
  filterObject,
  filterIsActive,
}) {
  console.log(filterIsActive);
  const [filterMenuVisiblity, setFilterMenuVisiblity] = useState(false);
  const handleSearchOnChange = (e) => {
    setFilterObject((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const handleClientSwitch = () => {
    setSwitchAppointment(false);
  };
  const handleAppointmentSwitch = () => {
    setSwitchAppointment(true);
  };
  const hanldeOnClickFilterMenu = () => {
    setFilterMenuVisiblity(!filterMenuVisiblity);
  };
  return (
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
          onClick={handleAppointmentSwitch}
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
            style={{ color: `${filterIsActive ? "blue" : "black"}` }}
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
