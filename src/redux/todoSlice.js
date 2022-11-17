import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlise = createSlice({
  name: 'todoApp',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodoCompleted: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.isCompleted = !toggleTodo.isCompleted;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodoCompleted, deleteTodo } = todoSlise.actions;

export default todoSlise.reducer;
