import { createSlice } from "@reduxjs/toolkit";
const quizSlice = createSlice({
  name: "quiz7",
  initialState: { g: 11, h: 7, m: 3, j: 5 },
  reducers: {
    incrementG: (state) => {
      state.g += state.h;
    },
    decreG: (state, { payload }) => {
      state.g -= payload;
    },
  },
});

export const { incrementG, decreG } = quizSlice.actions;
export default quizSlice.reducer;
