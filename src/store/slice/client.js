import { createSlice } from "@reduxjs/toolkit";
import clients from "../../data/client.json";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    data: clients,
  },
  reducers: {
    createClient(state, action) {
      const { firstName, lastName, DOB, gender, address, contact } =
        action.payload;
      const newClient = {
        id: state.data.length + 1, 
        firstName,
        lastName,
        DOB,
        gender,
        address,
        contact,
      };
      state.data.push(newClient);
    },
    deleteClient(state, action) {
      const { id } = action.payload;
      const indexToDelete = state.data.findIndex((client) => client.id === id);
      if (indexToDelete !== -1) {
        state.data.splice(indexToDelete, 1); 
      }
    },
    updateClient(state, action) {
      const { id, updates } = action.payload;
      const clientToUpdate = state.data.find((client) => client.id === id);
      if (clientToUpdate) {
        Object.assign(clientToUpdate, updates);
      }
    },
  },
});

export default clientSlice;
