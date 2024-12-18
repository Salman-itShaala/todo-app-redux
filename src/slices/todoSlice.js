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
    deleteTodo: (state, action) => {
      const id = action.payload;

      state.tasks = state.tasks.filter((task) => task.id !== id);

      /**
       * 
      const tasksArray = state.tasks;

      const filterdArray = [];
      for (let i = 0; i < tasksArray.length; i++) {
        if (id !== tasksArray[i].id) {
          filterdArray.push(tasksArray[i]);
        }
      }

      state.tasks = filterdArray;
       */
    },
    markAsDone: (state, action) => {
      const id = action.payload;

      state.tasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
