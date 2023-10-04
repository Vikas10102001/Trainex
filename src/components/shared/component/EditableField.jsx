import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAppointment, updateClient } from "../../../store/store";
import { CheckCircleOutline, EditOutlined } from "@mui/icons-material";

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
    if (updateType === "client") dispatch(updateClient({ id, updates }));
    if (type === "date")
      updates = { date: new Date(inputData).toLocaleDateString() };
    if (updateType === "appoint") {
      dispatch(
        updateAppointment({
          id,
          updates,
        })
      );
    }
  };
  const handleOnChange = (e) => {
    setInputData(e.target.value);
  };
  const handleEdit = () => {
    setEditMode(true);
  };
  const handleOnSave = () => {
    saveData();
  };
  const handleBlur = (e) => {
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
