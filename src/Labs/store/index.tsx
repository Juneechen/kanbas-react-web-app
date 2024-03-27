import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";
import quizReducer from "../a4/ReduxExamples/QuizRedux/quizReducer";

export type TodoType = {
  id: string;
  title: string;
};

export interface LabState {
  helloReducer: { message: string };
  counterReducer: { count: number };
  addReducer: {
    sum: number;
  };
  todosReducer: {
    todos: TodoType[];
    todo: TodoType;
  };
  quizReducer: {
    g: number;
    h: number;
    m: number;
    j: number;
  };
}

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
    quizReducer,
  },
});

export default store;
