import {Button, TextInput, View, StyleSheet} from 'react-native';
import React from 'react';

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
        <Button title="Add" onPress={handleAdd} />
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
  },
  DescInput: {
    height: 80,
    borderWidth: 2,
    padding: 5,
    width: 300,
    fontSize: 20,
    borderColor: 'gray',
  },
  NameInput: {
    height: 40,
    borderWidth: 2,
    padding: 5,
    width: 300,
    fontSize: 20,
    borderColor: 'gray',
  },
});
