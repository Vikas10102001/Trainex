import React, { useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteAppointment, setAlert } from "../../store/store";
import EditableField from "../shared/component/EditableField";
import Modal from "../shared/component/Modal";
import { formatDate, formatTime } from "../../utils/formatDateAndTime";
export default function AppointmentDataItem({ index, appointment }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    setModalIsOpen(true);
    setDeleteId(id);
  };
  const handleOnConfirm = () => {
    dispatch(deleteAppointment({ id: deleteId }));
    dispatch(
      setAlert({ type: "info", message: "Appointment deleted successfully" })
    );
  };
  const handleOnCancel = () => {
    setModalIsOpen(false);
  };
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <li className="table-row">
        <div className="table-row-item sNo">{index + 1}</div>
        <EditableField
          type={"date"}
          fieldName={"date"}
          initialData={appointment.date}
          fieldValue={formatDate(appointment.date)}
          updateType={"appoint"}
          id={appointment.id}
          min={currentDate}
        />
        <EditableField
          type={"time"}
          fieldName={"time"}
          initialData={appointment.time}
          fieldValue={formatTime(appointment.time)}
          updateType={"appoint"}
          id={appointment.id}
        />
        <div className="table-row-item">
          <DeleteOutline
            onClick={() => {
              handleDelete(appointment.id);
            }}
            style={{ color: "#515151", cursor: "pointer" }}
          />
        </div>
      </li>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onConfirm={handleOnConfirm}
          onCancel={handleOnCancel}
          title={"Confirm Delete"}
          data={<p>Are you sure ?</p>}
          footer={
            <>
              <button
                className="confirm-modal-btn danger"
                onClick={handleOnConfirm}
              >
                Confirm
              </button>
              <button
                className="confirm-modal-btn delete secondary"
                onClick={handleOnCancel}
              >
                Cancel
              </button>
            </>
          }
        />
      )}
    </>
  );
}
