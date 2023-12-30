/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskDescription from './TaskDescription';
import TasksTodoList from './TasksTodoList';
import TodoListHome from './TodoListHome';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import GetSignedIn from '../../Auth';

const Stack = createNativeStackNavigator();

export default function TodoApp() {
  const isSignedIn = GetSignedIn();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="ToDoListHome"
              options={{
                headerShown: false,
              }}
              component={TodoListHome}
            />
            <Stack.Screen
              name="TaskDescription"
              options={{
                headerShown: false,
              }}
              component={TaskDescription}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
