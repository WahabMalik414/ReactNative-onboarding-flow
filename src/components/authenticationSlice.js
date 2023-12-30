import {createSlice} from '@reduxjs/toolkit';
import {create} from 'react-test-renderer';

const initialState = {
  user: '',
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signIn: state => {},
    signOff: state => {},
  },
});

export default authenticationSlice.reducer;
export const {signIn, signOff} = authenticationSlice.actions;
