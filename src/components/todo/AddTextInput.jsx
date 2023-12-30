import {
  Button,
  TextInput,
  Text,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import React from 'react';

const handleLogout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out'));
};
export default function AddTextInput({setInput, setDescription, handleAdd}) {
  return (
    <View style={styles.InputContainer}>
      <TextInput
        onChangeText={newText => setInput(newText)}
        style={styles.NameInput}
        placeholder="Task name"
      />
      <TextInput
        onChangeText={newText => setDescription(newText)}
        style={styles.DescInput}
        placeholder="Task description"
      />
      <View style={styles.ButtonContainer}>
        {/* <Button title="Add" onPress={handleAdd} /> */}
        <Pressable
          onPress={handleAdd}
          style={({pressed}) => styles.button(pressed)}>
          {({pressed}) => <Text style={styles.text}>Add</Text>}
        </Pressable>
        <Pressable
          onPress={handleLogout}
          style={({pressed}) => styles.button(pressed)}>
          {({pressed}) => <Text style={styles.text}>Logout</Text>}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'column',
    marginTop: 20,
    gap: 10,
    width: 350,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ButtonContainer: {
    width: 300,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'roboto',
  },

  button: pressed => ({
    backgroundColor: pressed ? '#616060' : '#000000',
    height: 45,
    width: 100,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Add this line
    elevation: 10,
  }),
  NameInput: {
    margin: 3,
    padding: 20,
    fontSize: 20,
    height: 65,
    width: 296,
    borderRadius: 13,
    backgroundColor: '#D0EEDF',
  },
  DescInput: {
    margin: 5,
    padding: 20,
    fontSize: 20,
    height: 65,
    width: 296,
    borderRadius: 13,
    backgroundColor: '#D0EEDF',
  },
});
