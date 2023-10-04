import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import CreateAppointment from "./CreateAppointment";
import AppointmentData from "./AppointmentData";
import EditableField from "../shared/component/EditableField";

function AppointmentTable({ clientAppointment }) {
  const [showAppointmentData, setShowAppointmentData] = useState({});

  const toggleArrowButton = (clientId) => {
    setShowAppointmentData((prevState) => ({
      ...prevState,
      [clientId]: !prevState[clientId],
    }));
  };
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
              <td>
                <EditableField
                  type={"text"}
                  initialData={item.firstName}
                  fieldName={"firstName"}
                  fieldValue={item.firstName}
                  updateType={"client"}
                  id={item.clientId}
                />
              </td>
              <td>
                <EditableField
                  type={"text"}
                  initialData={item.lastName}
                  fieldName={"lastName"}
                  fieldValue={item.lastName}
                  updateType={"client"}
                  id={item.clientId}
                />
              </td>
              <td>
                <EditableField
                  type={"text"}
                  initialData={item.location}
                  fieldName={"address"}
                  fieldValue={item.location}
                  updateType={"client"}
                  id={item.clientId}
                />
              </td>
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
