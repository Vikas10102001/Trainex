import React, { useState } from "react";
import Card from "../../shared/ui/Card";
import { useNavigate } from "react-router-dom";
import Modal from "../../shared/component/Modal";
import ClientForm from "../../Client/ClientForm";

const additionalStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function DashboardTopMiddle() {
  const navigate = useNavigate();
  const [formModalIsOpen, setFormModalIsOpen] = useState(false);
  const handleAddOnClick = () => {
    setFormModalIsOpen(true);
  };
  const handleOnCancel = () => {
    setFormModalIsOpen(false);
  };
  const handleCalendarOnClick = () => {
    navigate("/calendar");
  };
  return (
    <div className="dashboard-top-middle">
      <Card additionalStyles={additionalStyles}>
        <p>Add a new client.</p>
        <button className="primary" onClick={handleAddOnClick}>
          Add client
        </button>
      </Card>
      <Card additionalStyles={additionalStyles}>
        <p>View your appointments on the calendar.</p>
        <button className="secondary" onClick={handleCalendarOnClick}>
          View calendar
        </button>
      </Card>
      <Modal
        isOpen={formModalIsOpen}
        onCancel={handleOnCancel}
        title={"Add CLient"}
        data={<ClientForm />}
      ></Modal>
    </div>
  );
}
