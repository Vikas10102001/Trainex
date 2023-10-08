import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createAppointment, setAlert } from "../../store/store";
import {
  validateAppointmentData,
  validateAppointmentTime,
} from "../../utils/validation";
import { RestartAlt } from "@mui/icons-material";

export default function CreateAppointment({ clientId }) {
  const [error, setError] = useState(null);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const timeRef = useRef();
  const dateRef = useRef();
  const dispatch = useDispatch();
  const handleChangeDate = (e) => {
    const inputDate = new Date(e.target.value);
    const error =
      time && validateAppointmentTime(inputDate.toLocaleDateString(), time);
    setError(error);
    setDate(inputDate.toLocaleDateString("en-US"));
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
      <span>Create :&nbsp;</span>
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
      <div className="buttons">
        <button type="reset" onClick={handleReset} className="reset ">
          <RestartAlt
            style={{
              fontSize: "15",
              color: "#515151",
              padding: "1px",
            }}
          />
        </button>
        <button
          type="submit"
          disabled={!!error || !date || !time}
          onClick={handleOnSubmit}
          className="primary submit"
        >
          Create
        </button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
