import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [] as any[], // as any[] is a type assertion
  module: { name: "New Module 123", description: "New Description" },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    // new module is in action.payload, add new module to the beginning
    // new module already contains the _id, genrated by the server in response to the POST request
    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules];
    },

    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },

    updateModule: (state, action) => {
      state.modules = state.modules.map((m) => {
        if (m._id === action.payload._id) {
          return action.payload;
        } else {
          return m;
        }
      });
    },

    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
