import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAlert,
  updateAppointment,
  updateClient,
} from "../../../store/store";
import { CheckCircleOutline, EditOutlined } from "@mui/icons-material";
import {
  validateAppointmentData,
  validateAppointmentDataOnUpdate,
  validateAppointmentTimeOnUpdate,
} from "../../../utils/validation";

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

  const saveData = () => {
    let updates = { [fieldName]: inputData };
    let error;
    if (updateType === "client") dispatch(updateClient({ id, updates }));
    if (type === "date")
      updates = { date: new Date(inputData).toLocaleDateString() };
    if (updateType === "appoint") {
      error = validateAppointmentDataOnUpdate({ id, updates });
      if (error) dispatch(setAlert({ type: "error", message: error }));
      else
        dispatch(
          updateAppointment({
            id,
            updates,
          })
        );
    }
  };
  const handleOnChange = (e) => {
    let error = null;
    if (fieldName === "time")
      error = validateAppointmentTimeOnUpdate({
        id: id,
        [fieldName]: e.target.value,
      });
    console.log(error);
    if (!error) setInputData(e.target.value);
  };
  const handleEdit = () => {
    setEditMode(true);
  };
  const handleOnSave = () => {
    saveData();
  };
  const handleBlur = () => {
    saveData();
    setEditMode(false);
  };
  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      saveData();
      setEditMode(false);
    }
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
          onKeyDown={handleKeyPress}
        />
      ) : (
        fieldValue
      )}
      {editMode ? (
        <CheckCircleOutline onClick={handleOnSave} />
      ) : (
        <EditOutlined onClick={handleEdit} />
      )}
    </>
  );
}
