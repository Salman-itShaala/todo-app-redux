import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload); // {id: nanoid() , todo: "Learn something new today", done: false}
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
