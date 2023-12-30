import {createSlice} from '@reduxjs/toolkit';
import {create} from 'react-test-renderer';
import auth from '@react-native-firebase/auth';

const initialState = {
  user: '',
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    SignIn: (state, action) => {
      auth()
        .signInWithEmailAndPassword(
          action.payload.email,
          action.payload.password,
        )
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    },
    SignUp: (state, action) => {
      auth()
        .createUserWithEmailAndPassword(
          action.payload.email,
          action.payload.password,
        )
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    },
    Logout: state => {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    },
  },
});

export default authenticationSlice.reducer;
export const {SignIn, Logout, SignUp} = authenticationSlice.actions;
