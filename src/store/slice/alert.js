import { createSlice } from "@reduxjs/toolkit";

//alert slice for showing alerts
const alertSlice = createSlice({
  name: "alert",
  initialState: {
    showAlert: false,
    type: null,
    message: null,
  },
  reducers: {
    setAlert(state, action) {
      return {
        ...state,
        type: action.payload.type,
        message: action.payload.message,
      };
    },
    setShowAlert(state, action) {
      return {
        ...state,
        showAlert: action.payload,
      };
    },
  },
});

export default alertSlice;
