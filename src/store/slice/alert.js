import { createSlice } from "@reduxjs/toolkit";

//alert slice for showing alerts
const alertSlice = createSlice({
  name: "alert",
  initialState: {
    data: null,
  },
  reducers: {
    setAlert(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export default alertSlice;
