import {configureStore} from '@reduxjs/toolkit';
import countReducer from './markSlice';
export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});
