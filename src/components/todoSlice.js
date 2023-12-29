import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  totalTasks: 0,
};
export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: state => {
      state.totalTasks += 1;
    },
    decrement: state => {
      state.totalTasks -= 1;
    },
  },
});

export const {increment, decrement} = countSlice.actions;
export default countSlice.reducer;
