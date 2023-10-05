import React, { useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteAppointment, setAlert } from "../../store/store";
import EditableField from "../shared/component/EditableField";
import Modal from "../shared/component/Modal";
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
      setAlert({ type: "success", message: "Appointment deleted successfully" })
    );
  };
  const handleOnCancel = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <EditableField
            type={"date"}
            fieldName={"date"}
            initialData={appointment.date}
            fieldValue={appointment.date}
            updateType={"appoint"}
            id={appointment.id}
          />
        </td>
        <td>
          <EditableField
            type={"time"}
            fieldName={"time"}
            initialData={appointment.time}
            fieldValue={appointment.time}
            updateType={"appoint"}
            id={appointment.id}
          />
        </td>
        <td>
          <DeleteOutline
            onClick={() => {
              handleDelete(appointment.id);
            }}
          />
        </td>
      </tr>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onConfirm={handleOnConfirm}
          onCancel={handleOnCancel}
          title={"Confirm Delete"}
          data={<p>Are you sure ?</p>}
          footer={
            <>
              <button className="button is-danger" onClick={handleOnConfirm}>
                Confirm
              </button>
              <button className="button" onClick={handleOnCancel}>
                Cancel
              </button>
            </>
          }
        />
      )}
    </>
  );
}
