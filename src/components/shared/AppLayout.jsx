import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
