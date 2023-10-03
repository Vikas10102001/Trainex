import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAppointment } from "../../store/store";

export default function CreateAppointment({ clientId }) {
  const [error, setError] = useState(null);
  const [minTime, setMinTime] = useState("4:00");
  const [formData, setFormData] = useState({ date: null, time: null });
  const dispatch = useDispatch();
  const handleChangeDate = (e) => {
    const inputDate = new Date(e.target.value);
    setFormData((prev) => ({
      ...prev,
      date: inputDate.toLocaleDateString(),
    }));
  };

  const handleChangeTime = (e) => {
    setFormData((prev) => ({
      ...prev,
      time: e.target.value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    formData.client = clientId;
    dispatch(createAppointment(formData));
  };
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <form>
      <h4>Appointment</h4>
      <label>Create Appointment:</label>
      <input
        type="date"
        name="appointmentDate"
        id="appointmentDate"
        min={currentDate}
        onChange={handleChangeDate}
      />
      <input
        type="time"
        name="appointmentTime"
        id="appointmentTime"
        onChange={handleChangeTime}
        min={minTime}
        max={"22:00"}
      />
      <button type="submit" onClick={handleOnSubmit}>
        Create
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
