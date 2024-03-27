import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {
    _id: "A",
    title: "New Assignment",
    course: "",
    description: "Assignment Desscription",
    points: 100,
    dueDate: "2024-05-01",
    availableFromDate: "2024-02-01",
    availableUntilDate: "2024-05-30",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // new assignment is in action.payload, add new assignment to the beginning
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: "A" + new Date().getTime().toString() },
        ...state.assignments,
      ];
      console.log("payload: ", action.payload);
      console.log("all assignments: ", state.assignments);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((a: any) => {
        if (a._id === action.payload._id) {
          return action.payload;
        } else {
          return a;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    selectAssignment: (state, action) => {
      state.assignment =
        state.assignments.find((a: any) => a._id === action.payload) ||
        state.assignment;
    },
    resetAssignment: (state) => {
      state.assignment = initialState.assignment;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  selectAssignment,
  resetAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
