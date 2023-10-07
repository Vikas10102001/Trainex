import React, { useState } from "react";
import Card from "../shared/ui/Card";
export default function FilterMenu({
  filterObject,
  setFilterObject,
  setFilterMenuVisiblity,
}) {
  const [gender, setGender] = useState(filterObject.gender);
  const [appointmentDate, setAppointmentDate] = useState(
    filterObject.appointmentDate
  );
  const handleOnGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleOnAppointmentDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };
  const handleOnApply = () => {
    setFilterObject((prev) => {
      return { ...prev, gender: gender, appointmentDate: appointmentDate };
    });
  };
  const handleOnReset = () => {
    setGender("");
    setAppointmentDate("");
    setFilterObject((prev) => {
      return { ...prev, gender: "", appointmentDate: "" };
    });
  };
  return (
    <Card className={"filter-menu"}>
      <div className="filter-item">
        <label htmlFor="date">Appointment Date :&nbsp;</label>
        <input
          type="date"
          id="date"
          onChange={handleOnAppointmentDateChange}
          value={appointmentDate}
        />
      </div>
      <div className="filter-item">
        <label>Gender : </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleOnGenderChange}
              checked={gender === "male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleOnGenderChange}
              checked={gender === "female"}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleOnGenderChange}
              checked={gender === "other"}
            />
            Other
          </label>
        </div>
      </div>
      <div className="filter-button">
        <button onClick={handleOnApply} className="primary">
          Apply
        </button>
        <button onClick={handleOnReset} className="secondary">
          Reset
        </button>
      </div>
    </Card>
  );
}
