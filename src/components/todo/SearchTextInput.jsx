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
    gap: 10,
    width: 296,
    justifyContent: 'center',
  },
  TextInput: {
    margin: 15,
    padding: 20,
    fontSize: 20,
    height: 65,
    width: 300,
    borderRadius: 13,
    backgroundColor: '#D0EEDF',
  },
});
