/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskDescription from './src/components/TaskDescription';
import TasksTodoList from './src/components/TasksTodoList';
import TodoListHome from './src/components/TodoListHome';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoListHome">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          options={{
            headerShown: false,
          }}
          component={Signup}
        />
        <Stack.Screen name="ToDoListHome" component={TodoListHome} />
        <Stack.Screen name="TaskDescription" component={TaskDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
