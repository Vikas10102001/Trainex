import React, { useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteAppointment } from "../../store/store";
import ConfirmationModal from "../shared/component/ConfirmationModal";
import EditableField from "../shared/component/EditableField";
export default function AppointmentDataItem({ index, appointment }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const splitDate = appointment.date.split("/");
  const initialDate = splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0];

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setModalIsOpen(true);
    setDeleteId(id);
  };
  const handleOnConfirm = () => {
    dispatch(deleteAppointment({ id: deleteId }));
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
            initialData={initialDate}
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
        <ConfirmationModal
          isOpen={modalIsOpen}
          onConfirm={handleOnConfirm}
          onCancel={handleOnCancel}
        />
      )}
    </>
  );
}
