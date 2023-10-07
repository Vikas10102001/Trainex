import React from "react";
import Navbar from "../../Layout/Navbar";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      {children}
    </div>
  );
}
