import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createAsyncThunk("todo/getTodos", async ()=>{ // api call })
// createAsyncThunk("todo/saveTodo", async ()=>{ // api call })

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const data = await res.json();
  return data;
});

// extraReducers = (builder) => builder.addCase(getTodos.reject, (action, state)=>{}).addCase()

// rejected
// pending
// success

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    status: "idle", // loading, failed, success
    error: "",
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
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.tasks = action.payload.todos;
        state.status = "success";
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = "Error while fetching todos.";
      });
  },
  // builder.addCase().addCase().addCase()
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
