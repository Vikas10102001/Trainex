import React from "react";
import Card from "../../shared/ui/Card";

const additionalStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
};
export default function DashboradTopLeft({
  todayAppointments,
  weeklyAppointments,
}) {
  return (
    <Card additionalStyles={additionalStyles} className={"dashboard-top-left"}>
      <div className="data-heading">Welcome Vikas !</div>
      <div className="data-items">
        <div className="data-item">
          <p className="key">
            <span className="value">{todayAppointments} </span>
            appointments today
          </p>
        </div>
        <div className="data-item">
          <p className="key">
            <span className="value">{weeklyAppointments} </span>
            appointments this week
          </p>
        </div>
      </div>
    </Card>
  );
}
