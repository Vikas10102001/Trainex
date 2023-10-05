import React from "react";
import InfoCard from "./InfoCard";

export default function Info({ currentDateString, clientAppointmentForDate }) {
  return clientAppointmentForDate.length !== 0 ? (
    <InfoCard data={clientAppointmentForDate} currentDate={currentDateString} />
  ) : (
    <></>
  );
}
