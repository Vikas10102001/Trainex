import React from "react";
import "../../styles/navigation.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const handleCalendarButton = () => {
    navigate("/calendar");
  };
  const handleDashboardButton = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <img src="/TrainexLogo.jpg" alt="logo" width={50} height={50} />
            <span className="logo-name">Trainex</span>
          </Link>
        </div>
      </div>
      <div className="right">
        <button
          className={`${currentPath === "/" ? "active" : ""}`}
          onClick={handleDashboardButton}
        >
          Dashboard
        </button>
        <button
          onClick={handleCalendarButton}
          className={`${currentPath === "/calendar" ? "active" : ""}`}
        >
          Calendar
        </button>
      </div>
    </div>
  );
}
