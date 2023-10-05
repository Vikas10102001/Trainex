import React from "react";
import Info from "./Info/Info";

export default function Day({ currentMonth, day, clientAppointment }) {
  const current = new Date();
  const currentDate = new Date(
    `${current.getMonth() + 1}/${day}/${current.getFullYear()}`
  );
  const currentDateString = currentDate.toLocaleDateString();
  let clientAppointmentForDate = [];
  for (let el of clientAppointment) {
    el.appointments.forEach((appointment) => {
      const appointmentDate = new Date(appointment.date);
      const appointmentDateString = appointmentDate.toLocaleDateString();
      if (currentDateString === appointmentDateString)
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
          currentDateString={currentDateString}
        />
      )}
    </div>
  );
}
