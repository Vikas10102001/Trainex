import React from "react";

function calculateStat(clientAppointments) {
  const currentDate = new Date();

  const currentWeekStart = new Date(currentDate);
  currentWeekStart.setHours(0, 0, 0, 0);
  currentWeekStart.setDate(currentDate.getDate() - currentDate.getDay());

  const currentWeekEnd = new Date(currentDate);
  currentWeekEnd.setHours(23, 59, 59, 999);
  currentWeekEnd.setDate(currentWeekStart.getDate() + 6);
  let todayAppointments = 0;
  let weeklyAppointments = 0;
  let nextAppointment = null;
  let client = null;
  for (const clientAppointment of clientAppointments) {
    for (const appointment of clientAppointment.appointments) {
      const dateParts = appointment.date.split("/");
      const timeParts = appointment.time.split(":");
      const appointmentDate = new Date(
        parseInt(dateParts[2]),
        parseInt(dateParts[0]) - 1,
        parseInt(dateParts[1]),
        parseInt(timeParts[0]),
        parseInt(timeParts[1])
      );
      if (
        appointmentDate.getDate() === currentDate.getDate() &&
        appointmentDate.getMonth() === currentDate.getMonth() &&
        appointmentDate.getFullYear() === currentDate.getFullYear()
      ) {
        todayAppointments++;
      }
      if (
        appointmentDate >= currentWeekStart &&
        appointmentDate <= currentWeekEnd
      ) {
        weeklyAppointments++;
      }
      if (appointmentDate >= currentDate) {
        if (!nextAppointment || appointmentDate < nextAppointment) {
          nextAppointment = appointmentDate;
          client = `${clientAppointment.firstName} ${clientAppointment.lastName}`;
        }
      }
    }
  }
  const nextAppointmentTime = `${nextAppointment.getHours()}:${nextAppointment.getMinutes()}`;
  if (nextAppointment.getDate() === currentDate.getDate())
    nextAppointment = "Today";
  else if (nextAppointment.getDate() === currentDate.getDate() + 1)
    nextAppointment = "Tomorrow";
  else nextAppointment = nextAppointment.toLocaleDateString();

  return {
    todayAppointments,
    weeklyAppointments,
    client,
    nextAppointment,
    nextAppointmentTime,
  };
}

export default function Status({ clientAppointment }) {
  const {
    todayAppointments,
    weeklyAppointments,
    client,
    nextAppointment,
    nextAppointmentTime,
  } = calculateStat(clientAppointment);

  return (
    <div className="dashboard-status">
      <div className="left">
        <h2>Welcome Vikas !</h2>
        <div className="status">
          Today total Appointments: <span>{todayAppointments}</span>
        </div>
        <div className="status">
          Weekly total Appointments: <span>{weeklyAppointments}</span>
        </div>
      </div>
      <div className="right">
        <h4>Next Appointment</h4>
        <span>
          {nextAppointment} at {nextAppointmentTime}
        </span>
        <h4>with</h4>
        <span>{client}</span>
      </div>
    </div>
  );
}
