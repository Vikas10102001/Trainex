import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React from "react";


export default function MonthNavigation({currentMonth,setCurrentMonth}) {
    const handleMonthChange = (increment) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(currentMonth.getMonth() + increment);
        setCurrentMonth(newMonth);
      };
  return (
    <div className="month-navigation">
      <button onClick={() => handleMonthChange(-1)}><ArrowBackIos/></button>
      <h1>{currentMonth.toLocaleString("default", { month: "long" })}</h1>
      <button onClick={() => handleMonthChange(1)}><ArrowForwardIos/></button>
    </div>
  );
}
