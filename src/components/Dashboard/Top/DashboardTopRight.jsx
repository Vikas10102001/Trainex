import React from "react";
import { formatDate, formatTime } from "../../../utils/formatDateAndTime";
import Card from "../../shared/ui/Card";

const additionalStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
};
export default function DashboardTopRight({
  nextAppointment,
  nextAppointmentTime,
  client,
}) {
  let formatDateAndTime = nextAppointment;
  if (
    nextAppointment &&
    nextAppointment !== "Today" &&
    nextAppointment !== "Tomorrow"
  )
    formatDateAndTime = formatDate(nextAppointment);
  return (
    <Card additionalStyles={additionalStyles} className={"dashboard-top-right"}>
      <div className="data-heading">Next Appointment</div>
      {nextAppointment ? (
        <div className="data-items">
          <div className="data-item">
            <span className="value">{formatDateAndTime}</span>
          </div>
          <div className="data-item">
            <span className="value">{formatTime(nextAppointmentTime)}</span>
          </div>
          <div className="data-item">
            <span className="key">With </span>
            <span className="value">{client}</span>
          </div>
        </div>
      ) : (
        <div className="data-items">No Appointment</div>
      )}
    </Card>
  );
}
