import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

export default function CalenderMain({
  currentMonth,
  setCurrentMonth,
  clientAppointment,
}) {
  return (
    <div className="calendar-container">
      <MainLeft currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      <MainRight
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        clientAppointment={clientAppointment}
      />
    </div>
  );
}
