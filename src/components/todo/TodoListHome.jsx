import {
  Alert,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import uuid from 'react-native-uuid';
import React from 'react';
import AddTextInput from './AddTextInput';
import SearchTextInput from './SearchTextInput';
import TasksTodoList from './TasksTodoList';
import {useSelector, useDispatch} from 'react-redux';
import {increment, addTask} from '../../store/todoSlice.js';
import firestore from '@react-native-firebase/firestore';

export default function TodoListHome() {
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('');
  const [EditIndex, SetEditIndex] = useState(null);
  const [Search, setSearch] = useState('');
  const count = useSelector(state => state.todo.totalTasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input && description) {
      const newTask = {
        localid: uuid.v4(),
        name: input,
        description: description,
        isCompleted: false,
      };
      dispatch(addTask(newTask));
    } else {
      Alert.alert('Add both name and description');
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.Container}>
      <Text style={styles.Header}>To-Do list</Text>

      <AddTextInput
        handleAdd={handleAdd}
        setInput={setInput}
        setDescription={setDescription}
      />
      <Text style={styles.totalTasks}>Total tasks:{count}</Text>
      <SearchTextInput setSearch={setSearch} />
      <TasksTodoList
        Search={Search}
        EditIndex={EditIndex}
        SetEditIndex={SetEditIndex}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  totalTasks: {
    fontSize: 18,
    marginTop: 5,
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#A9e0c5',
  },
  scrollContainer: {
    flex: 1,
  },

  Header: {
    fontSize: 30,
    marginTop: 12,
    color: 'black',
    fontFamily: 'krona',
  },
});
