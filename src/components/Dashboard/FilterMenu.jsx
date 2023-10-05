// import React, { useState } from 'react';

// function GenderSelection() {
//   const [selectedGender, setSelectedGender] = useState('');

//   const handleGenderChange = (event) => {
//     setSelectedGender(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Select your gender:</h2>

//       <p>Selected Gender: {selectedGender}</p>
//     </div>
//   );
// }

// export default GenderSelection;

import React, { useState } from "react";

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
    <div className="filter-menu">
      <div className="filter-item">
        <label htmlFor="date">Appointment Date:</label>
        <input
          type="date"
          id="date"
          onChange={handleOnAppointmentDateChange}
          value={appointmentDate}
        />
      </div>
      <div className="filter-item">
        <label>Gender:</label>
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
      <div className="filter-item">
        <button onClick={handleOnApply}>Apply</button>
        <button onClick={handleOnReset}>Reset</button>
      </div>
    </div>
  );
}
