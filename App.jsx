/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/components/Home';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
