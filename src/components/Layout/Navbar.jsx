import React from "react";
import "../../styles/navigation.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <img src="/logo-white.png" alt="logo" />
        </div>
        <span>Trainex</span>
      </div>
      <div className="right">
        <Link to="/">Dashboard</Link>
        <Link to="/calender">Calender</Link>
      </div>
    </div>
  );
}
