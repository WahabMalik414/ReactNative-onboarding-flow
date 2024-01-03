import {useState, useRef, useEffect} from 'react';
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {
  View,
  FlatList,
  StyleSheet,
  Button,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  editTask,
  markCompleted,
  removeTask,
  setTask,
} from '../../store/todoSlice';
import firestore from '@react-native-firebase/firestore';

export default function TasksTodoList({Search, EditIndex, SetEditIndex}) {
  const todos = useSelector(state => state.todo.todos);
  const filteredTasks = todos.filter(item => item.name.includes(Search));
  const [editInput, setEditInput] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const userId = auth().currentUser?.uid;

    if (!userId) {
      // User not signed in, handle accordingly
      return;
    }

    const unsubscribe = firestore()
      .collection('users')
      .doc(userId)
      .collection('todos')
      .onSnapshot(
        querySnapshot => {
          const newTodos = [];
          querySnapshot.forEach(doc => {
            newTodos.push({id: doc.id, ...doc.data()});
          });
          dispatch(setTask(newTodos));
        },
        error => {
          console.error('Error getting todos:', error);
        },
      );

    return () => unsubscribe(); // Unsubscribe when component unmounts
  }, [dispatch]);
  const handleDelete = item => {
    console.log(item.id);
    SetEditIndex(null);
    setEditInput('');
    dispatch(removeTask(item.id));
  };

  const handleSave = item => {
    dispatch(editTask({EditIndex, editInput, editDescription}));
    console.log(item.id);
    SetEditIndex(null);
    setEditInput('');
  };

  const handleEdit = item => {
    SetEditIndex(item.id);
    setEditDescription(item.description);
    setEditInput(item.name);
  };
  const handleDetail = item => {
    navigation.navigate('TaskDescription', {item});
  };
  const handleCompleted = item => {
    dispatch(markCompleted(item.id));
  };
  return (
    <FlatList
      removeClippedSubviews={false}
      style={styles.TodoList}
      data={filteredTasks}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.Entry} key={item.id}>
          {EditIndex === item.id ? (
            <View>
              <Text>Name:</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={text => setEditInput(text)}
                defaultValue={item.name}
              />
              <Text>Description:</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={text => setEditDescription(text)}
                defaultValue={item.description}
              />
            </View>
          ) : (
            <Text style={styles.Task}>{item.name}</Text>
          )}
          <View style={styles.Buttons}>
            {EditIndex === item.id ? (
              <Button
                title="save"
                onPress={() => handleSave(item)}
                color="green"
              />
            ) : (
              <Button
                title="Edit"
                onPress={() => handleEdit(item)}
                color="blue"
              />
            )}
            <Button
              title="Delete"
              onPress={() => handleDelete(item)}
              color="red"
            />
            <Button
              title="Details"
              onPress={() => handleDetail(item)}
              color="blue"
            />
            <Button
              title="Mark done"
              disabled={item.isCompleted}
              onPress={() => handleCompleted(item)}
              color="orange"
            />
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  TodoListContainer: {
    flex: 1,
    maxWidth: '100%',
    width: 350,
    padding: 5,
    alignItems: 'center',
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  Entry: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'flex-start',
    marginTop: 5,
    flex: 1,
  },
  Task: {
    flexWrap: 'wrap',
    flexShrink: 1,
    fontSize: 20,
  },
  TodoList: {
    flex: 1,
    marginTop: 5,
  },
  InputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
    width: 350,
    justifyContent: 'flex-start',
  },
  TextInput: {
    height: 40,
    borderWidth: 2,
    padding: 5,
    width: 300,
    fontSize: 20,
    borderColor: 'gray',
  },

  Header: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
