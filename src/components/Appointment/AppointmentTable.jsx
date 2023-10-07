import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import CreateAppointment from "./CreateAppointment";
import AppointmentData from "./AppointmentData";
import EditableField from "../shared/component/EditableField";
import Card from "../shared/ui/Card";

function AppointmentTable({ clientAppointment }) {
  const [showAppointmentData, setShowAppointmentData] = useState({});

  const toggleArrowButton = (clientId) => {
    setShowAppointmentData((prevState) => ({
      ...prevState,
      [clientId]: !prevState[clientId],
    }));
  };
  return (
    <Card className={"table-card"}>
      <ul className="table">
        <li className="table-header">
          <div>First Name</div>
          <div>Last Name</div>
          <div>Location</div>
          <div>Total Appointments</div>
        </li>
        {clientAppointment.length === 0 ? (
          <p className="no-data">No appoitnments</p>
        ) : (
          <>
            {clientAppointment.map((item) => (
              <React.Fragment key={item.clientId}>
                <li className="table-row">
                  <EditableField
                    type={"text"}
                    initialData={item.firstName}
                    fieldName={"firstName"}
                    fieldValue={item.firstName}
                    updateType={"client"}
                    id={item.clientId}
                    maxLength={15}
                    minLength={2}
                  />

                  <EditableField
                    type={"text"}
                    initialData={item.lastName}
                    fieldName={"lastName"}
                    fieldValue={item.lastName}
                    updateType={"client"}
                    id={item.clientId}
                    maxLength={15}
                    minLength={2}
                  />

                  <EditableField
                    type={"text"}
                    initialData={item.location}
                    fieldName={"address"}
                    fieldValue={item.location}
                    updateType={"client"}
                    id={item.clientId}
                    maxLength={50}
                    minLength={5}
                  />
                  <div className="table-row-item manage">
                    <span>{item.appointments.length}</span>
                    <button
                      className="primary"
                      onClick={() => toggleArrowButton(item.clientId)}
                    >
                      <span>Manage</span>
                      {showAppointmentData[item.clientId] ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )}
                    </button>
                  </div>
                </li>
                {showAppointmentData[item.clientId] && (
                  <>
                    <li className="table-row appointment">
                      <h4>Appointments</h4>
                      <div colSpan="4" className="create-appointment">
                        <CreateAppointment clientId={item.clientId} />
                      </div>
                    </li>
                    {item.appointments.length !== 0 ? (
                      <li className="table-row appointment">
                        <div colSpan="4">
                          <AppointmentData item={item} />
                        </div>
                      </li>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </React.Fragment>
            ))}
          </>
        )}
      </ul>
    </Card>
  );
}

export default AppointmentTable;
