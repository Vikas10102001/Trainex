import React from "react";
import Day from "./Day";

export default function MainRight({ currentMonth, clientAppointment }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const generateDays = () => {
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();

    const firstDayIndex = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();

    const days = [];

    for (let i = 1; i <= daysInMonth + firstDayIndex; i++) {
      if (i > firstDayIndex) {
        days.push(i - firstDayIndex);
      } else {
        days.push("");
      }
    }

    return days;
  };
  return (
    <div className="right-column">
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="days">
        {generateDays().map((day, index) => (
          <Day
            key={index}
            day={day}
            clientAppointment={clientAppointment}
            currentMonth={currentMonth}
          />
        ))}
      </div>
    </div>
  );
}
