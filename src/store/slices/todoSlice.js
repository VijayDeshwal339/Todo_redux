// src/slices/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [{ text: 'Identify and contextualize the problem', completed: true },
      {text: 'Present ideas and change to team', completed: true},
      {text:'Prepare User Flows', completed: true},
      {text: 'Prepare design style guide', completed: false},
      {text:' Delivery stage: test and release', completed: false}],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload.text, completed: false });
    },
    toggleTodo: (state, action) => {
      const index = action.payload.index;
      state.todos[index].completed = !state.todos[index].completed;
    },
  },
});

export const { addTodo,toggleTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos.todos;
export default todoSlice.reducer;
