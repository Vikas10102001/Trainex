import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slice/alert";
import appointmentSlice from "./slice/appointment";
const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    appointment: appointmentSlice.reducer,
  },
});

export default store;
export const {
  createAppointment,
  getAppointment,
  deleteAppointment,
  updateAppointment,
} = appointmentSlice.actions;
