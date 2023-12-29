import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const initialState = {
  totalTasks: 0,
  todos: [],
};
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push(action.payload);
      state.totalTasks += 1;
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      state.totalTasks -= 1;
    },
    markCompleted: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          if (todo.isCompleted === true) {
            Alert.alert('Task already marked as completed!');
          } else {
            Alert.alert('Task marked as completed!');
            todo.isCompleted = true;
          }
        }
        return todo;
      });
    },
    editTask: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.EditIndex) {
          todo.name = action.payload.editInput;
          todo.description = action.payload.editDescription;
        }
        return todo;
      });
    },
  },
});

export const {
  increment,
  decrement,
  addTask,
  removeTask,
  editTask,
  markCompleted,
} = todoSlice.actions;
export default todoSlice.reducer;
