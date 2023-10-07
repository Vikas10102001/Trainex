import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAlert,
  updateAppointment,
  updateClient,
} from "../../../store/store";
import { CheckCircleOutline, EditOutlined } from "@mui/icons-material";
import {
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
  maxLength,
  minLength,
  min,
}) {
  const [editMode, setEditMode] = useState(false);
  const [inputData, setInputData] = useState(initialData);
  const [fieldError, setFieldError] = useState(null);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  useEffect(() => {
    if (editMode) inputRef.current.focus();
  }, [editMode]);

  const saveData = () => {
    let updates = { [fieldName]: inputData };
    let error;
    if (updateType === "client") {
      if (!fieldError) {
        dispatch(updateClient({ id, updates }));
        dispatch(
          setAlert({ type: "info", message: "Client updated sucessfully" })
        );
      } else setInputData(initialData);
    }
    if (type === "date")
      updates = { date: new Date(inputData).toLocaleDateString() };
    if (updateType === "appoint") {
      error = validateAppointmentDataOnUpdate({ id, updates });
      if (error) dispatch(setAlert({ type: "error", message: error }));
      else {
        dispatch(
          updateAppointment({
            id,
            updates,
          })
        );
        dispatch(
          setAlert({
            type: "success",
            message: "Appointment updated successfully",
          })
        );
      }
    }
  };
  const handleOnChange = (e) => {
    let error = null;
    if (fieldName === "time")
      error = validateAppointmentTimeOnUpdate({
        id: id,
        [fieldName]: e.target.value,
      });
    console.log(minLength, e.target.value.length);
    if (minLength && minLength > e.target.value.length)
      error = `Allowed ${minLength}-${maxLength} characters`;
    setFieldError(error);
    if (fieldName !== "time" && fieldName !== "date")
      setInputData(e.target.value);
    if (!error) setInputData(e.target.value);
  };
  const handleEdit = () => {
    setEditMode(true);
  };
  const handleOnSave = () => {
    saveData();
  };
  const handleBlur = (e) => {
    if (inputData !== initialData) saveData();
    setEditMode(false);
    setFieldError(null);
  };
  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      saveData();
      setEditMode(false);
    }
  };
  return (
    <div className="editable-field">
      <div className="field">
        {editMode ? (
          <input
            type={type}
            value={inputData}
            ref={inputRef}
            maxLength={maxLength}
            minLength={minLength}
            min={min}
            onChange={(e) => {
              handleOnChange(e);
            }}
            onBlur={handleBlur}
            onKeyDown={handleKeyPress}
          />
        ) : (
          <span>{fieldValue}</span>
        )}
        
      </div>
      <div className="button">
          {editMode ? (
            <CheckCircleOutline
              onClick={handleOnSave}
              style={{ fontSize: "16", color: "#515151", cursor: "pointer" }}
            />
          ) : (
            <EditOutlined
              onClick={handleEdit}
              fontSize="12"
              color="#515151"
              style={{ fontSize: "16", color: "#515151", cursor: "pointer" }}
            />
          )}
        </div>
      <div className="error">
        {" "}
        {fieldError && <p className="error">{fieldError}</p>}
      </div>
    </div>
  );
}
