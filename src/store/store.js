import {configureStore} from '@reduxjs/toolkit';
import countReducer from '../components/todoSlice';
export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});
