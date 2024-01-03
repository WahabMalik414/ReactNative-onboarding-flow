import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const initialState = {
  totalTasks: 0,
  todos: [],
};
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.todos = action.payload;
      state.totalTasks = action.payload.length;
    },
    addTask: (state, action) => {
      firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .collection('todos')
        .add(action.payload)
        .then(documentReference => {
          console.log(
            action.payload.name,
            'added with id: ',
            documentReference.email,
          );
        })
        .catch(error => {
          console.log(error);
        });
      state.totalTasks += 1;
    },
    removeTask: (state, action) => {
      firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .collection('todos')
        .doc(action.payload)
        .delete()
        .then(() => {
          console.log('Task deleted successfully');
        })
        .catch(error => {
          console.error('Error deleting task:', error);
        });
      state.totalTasks -= 1;
    },
    markCompleted: (state, action) => {
      firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .collection('todos')
        .doc(action.payload)
        .update({
          isCompleted: true,
        })
        .then(() => {
          console.log('updated!');
        })
        .catch(error => {
          console.log(error);
        });
    },
    editTask: (state, action) => {
      firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .collection('todos')
        .doc(action.payload.EditIndex)
        .update({
          name: action.payload.editInput,
          description: action.payload.editDescription,
        })
        .then(() => {
          console.log('User updated!');
        })
        .catch(error => {
          console.log(error);
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
  setTask,
} = todoSlice.actions;
export default todoSlice.reducer;
