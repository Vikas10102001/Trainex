import { createSlice } from "@reduxjs/toolkit";
import clients from "../../data/clients.json";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    data: clients,
  },
  reducers: {
    createClient: (state, action) => {
      const { firstName, lastName, DOB, gender, address, profileImg } = action.payload;
      const newClient = {
        id: state.data.length + 1, // Generate a new ID
        firstName,
        lastName,
        DOB,
        gender,
        address,
        profileImg,
      };
      state.data.push(newClient);
    },
    deleteClient: (state, action) => {
      const { id } = action.payload;
      const indexToDelete = state.data.findIndex((client) => client.id === id);
      if (indexToDelete !== -1) {
        state.data.splice(indexToDelete, 1); // Remove the client
      }
    },
    updateClient: (state, action) => {
      const { id, updates } = action.payload;
      const clientToUpdate = state.data.find((client) => client.id === id);
      if (clientToUpdate) {
        Object.assign(clientToUpdate, updates); // Update the client
      }
    },
  },
});


export default clientSlice;
