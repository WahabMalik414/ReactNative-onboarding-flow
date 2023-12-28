import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export default function SearchTextInput({setSearch}) {
  return (
    <View style={styles.InputContainer}>
      <TextInput
        onChangeText={newText => setSearch(newText)}
        style={styles.TextInput}
        placeholder="Search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    marginTop: 50,
    gap: 10,
    width: 300,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TextInput: {
    height: 40,
    borderWidth: 2,
    padding: 5,
    width: 300,
    fontSize: 20,
    borderColor: 'gray',
  },
});
