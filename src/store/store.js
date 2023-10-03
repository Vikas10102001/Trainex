import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slice/alert";
import appointmentSlice from "./slice/appointment";
import clientSlice from "./slice/client";
const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    appointment: appointmentSlice.reducer,
    client: clientSlice.reducer,
  },
});

export default store;
export const { setAlert, showAlert } = alertSlice.actions;
export const { createClient, getClients, deleteClient, updateClient } =
  clientSlice.actions;
export const {
  createAppointment,
  getAppointment,
  deleteAppointment,
  updateAppointment,
} = appointmentSlice.actions;
