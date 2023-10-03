import { createSlice } from "@reduxjs/toolkit";
import appointments from "../../data/apointment.json";

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    data: appointments,
  },
  reducers: {
    createAppointment: (state, action) => {
      const { client, date, time } = action.payload;
      const newAppointment = {
        id: state.data.length + 1, // Generate a new ID
        client,
        date,
        time,
      };
      state.data.push(newAppointment);
    },
    deleteAppointment: (state, action) => {
      const { id } = action.payload;
      const indexToDelete = state.data.findIndex((appointment) => appointment.id === id);
      if (indexToDelete !== -1) {
        state.data.splice(indexToDelete, 1); // Remove the appointment
      }
    },
    updateAppointment: (state, action) => {
      const { id, updates } = action.payload;
      const appointmentToUpdate = state.data.find((appointment) => appointment.id === id);
      if (appointmentToUpdate) {
        Object.assign(appointmentToUpdate, updates); // Update the appointment
      }
    },
  },
});


export default appointmentSlice.reducer;
