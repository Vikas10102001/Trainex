import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAppointment, updateClient } from "../../../store/store";
import { EditOutlined } from "@mui/icons-material";

export default function EditableField({
  type,
  initialData,
  fieldName,
  fieldValue,
  updateType,
  id,
}) {
  const [editMode, setEditMode] = useState(false);
  const [inputData, setInputData] = useState(initialData);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  useEffect(() => {
    if (editMode) inputRef.current.focus();
  }, [editMode]);
  const handleOnChange = (e) => {
    setInputData(e.target.value);
    let updates = { [fieldName]: e.target.value };
    if (type === "date")
      updates = { date: new Date(e.target.value).toLocaleDateString() };
    if (updateType === "appoint") {
      dispatch(
        updateAppointment({
          id,
          updates,
        })
      );
    }
    if (updateType === "client") dispatch(updateClient({ id, updates }));
    setEditMode(false);
  };
  const handleEdit = () => {
    setEditMode(true);
  };
  const handleBlur = () => {
    setEditMode(false);
  };
  return (
    <>
      {editMode ? (
        <input
          type={type}
          value={inputData}
          ref={inputRef}
          onChange={(e) => {
            handleOnChange(e);
          }}
          onBlur={handleBlur}
        />
      ) : (
        fieldValue
      )}
      <EditOutlined onClick={handleEdit} />
    </>
  );
}
