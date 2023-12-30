import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import authenticationReducer from './authenticationSlice';
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authenticationReducer,
  },
});
