import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createAppointment, setAlert } from "../../store/store";
import {
  validateAppointmentData,
  validateAppointmentTime,
} from "../../utils/validation";

export default function CreateAppointment({ clientId }) {
  const [error, setError] = useState(null);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const timeRef = useRef();
  const dateRef = useRef();
  const dispatch = useDispatch();
  const handleChangeDate = (e) => {
    const inputDate = new Date(e.target.value);
    const error = time && validateAppointmentTime(inputDate, time);
    setError(error);
    setDate(inputDate.toLocaleDateString());
  };

  const handleChangeTime = (e) => {
    const time = e.target.value;
    const error = date && validateAppointmentTime(date, time);
    setError(error);
    setTime(time);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = { date: date, time: time };
    formData.client = clientId;
    const err = validateAppointmentData(formData);

    if (!err) {
      dispatch(createAppointment(formData));
      dispatch(
        setAlert({
          type: "success",
          message: "Appointment created successfully",
        })
      );
      handleReset();
    } else {
      dispatch(
        setAlert({
          type: "error",
          message: err,
        })
      );
    }
  };
  const handleReset = () => {
    timeRef.current.value = "";
    dateRef.current.value = "";
    setError(null);
    setTime(null);
    setDate(null);
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
        ref={timeRef}
        onChange={handleChangeDate}
      />
      <input
        type="time"
        name="appointmentTime"
        id="appointmentTime"
        onChange={handleChangeTime}
        ref={dateRef}
      />
      <button type="reset" onClick={handleReset}>
        x
      </button>
      <button
        type="submit"
        disabled={!!error || !date || !time}
        onClick={handleOnSubmit}
      >
        Create
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
