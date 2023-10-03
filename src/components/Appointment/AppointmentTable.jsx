import React, { useState } from "react";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import CreateAppointment from "./CreateAppointment";
import AppointmentData from "./AppointmentData";

function AppointmentTable({ clientAppointment }) {
  const [showAppointmentData, setShowAppointmentData] = useState({});

  const toggleArrowButton = (clientId) => {
    setShowAppointmentData((prevState) => ({
      ...prevState,
      [clientId]: !prevState[clientId],
    }));
  };
  console.log(clientAppointment)
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location</th>
          <th>Total appointments</th>
        </tr>
      </thead>
      <tbody>
        {clientAppointment.map((item) => (
          <React.Fragment key={item.clientId}>
            <tr>
              <td>{item.clientId}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.location}</td>
              <td>
                {item.appointments.length}{" "}
                <span onClick={() => toggleArrowButton(item.clientId)}>
                  {showAppointmentData[item.clientId] ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </span>
              </td>
            </tr>
            {showAppointmentData[item.clientId] && (
              <>
                <tr style={{ border: "1px solid black" }}>
                  <td colSpan="5">
                    <CreateAppointment clientId={item.clientId} />
                  </td>
                </tr>
                <tr>
                  <td colSpan="5">
                    <AppointmentData item={item} />
                  </td>
                </tr>
              </>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default AppointmentTable;
