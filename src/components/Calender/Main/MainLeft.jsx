import React from "react";

export default function MainLeft({currentMonth,setCurrentMonth}) {
  const currentDate = new Date();
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="left-column">
      <button disabled={true} />
      {monthsOfYear.map((month, index) => (
        <button
          key={month}
          onClick={() =>
            setCurrentMonth(new Date(currentDate.getFullYear(), index, 1))
          }
          className={currentMonth.getMonth() === index ? "active" : ""}
        >
          {month}
        </button>
      ))}
    </div>
  );
}
