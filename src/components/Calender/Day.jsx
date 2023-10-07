import React from "react";
import Info from "./Info/Info";

export default function Day({ currentMonth, day, clientAppointment }) {
  const current = new Date();
  const currentDate =
    `${currentMonth.getMonth()+1}/${day}/${current.getFullYear()}`
  console.log(day)
  let clientAppointmentForDate = [];
  for (let el of clientAppointment) {
    el.appointments.forEach((appointment) => {
      if (currentDate === appointment.date)
        clientAppointmentForDate.push({
          name: el.firstName + el.lastName,
          time: appointment.time,
        });
    });
  }
  return (
    <div
      className={`day ${
        day === current.getDate() &&
        currentMonth.getMonth() === current.getMonth()
          ? "current-date"
          : ""
      } ${clientAppointmentForDate.length !== 0 ? "appointment-date" : ""}`}
    >
      <div className="date">{day}</div>
      {day && (
        <Info
          day={day}
          clientAppointmentForDate={clientAppointmentForDate}
          currentDateString={currentDate}
        />
      )}
    </div>
  );
}
