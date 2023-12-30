import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../components/todoSlice';
import authenticationReducer from '../components/authenticationSlice';
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authenticationReducer,
  },
});
