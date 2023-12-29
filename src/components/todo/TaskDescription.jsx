import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TaskDescription({route}) {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Description</Text>
      <Text style={styles.Header}>Name: {item.name}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>
      <Text style={styles.text}>
        Status: {item.isCompleted ? 'Completed' : 'Pending'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#A9e0c5',
  },
  title: {
    fontSize: 30,
    marginTop: 12,
    color: 'black',
    fontFamily: 'krona',
    marginBottom: 100,
  },
  text: {
    marginTop: 35,
    fontSize: 25,
  },
  Header: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
