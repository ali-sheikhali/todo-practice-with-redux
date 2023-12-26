import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.floor(Math.random()*1000),
        title: action.payload,
      };
      state.push(todo)
    },
    removeTodo:(state,action) =>{
     return state.filter((todo) => todo.id !== action.payload)
    }

  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer