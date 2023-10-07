import React, { useState } from "react";
import "../../styles/calendar.css";
import AppLayout from "../shared/ui/AppLayout";
import MonthNavigation from "./MonthNavigation";
import CalenderMain from "./Main/CalenderMain";

function Calendar({ clientAppointment }) {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate);
  return (
    <AppLayout>
      <div className="calendar">
        <MonthNavigation
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <CalenderMain
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          clientAppointment={clientAppointment}
        />
      </div>
    </AppLayout>
  );
}

export default Calendar;
