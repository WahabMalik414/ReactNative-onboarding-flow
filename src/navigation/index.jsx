import React from 'react';
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import TaskDescription from '../components/todo/TaskDescription';
import TodoListHome from '../components/todo/TodoListHome';
import useIsAuthed from '../hooks/useIsAuthed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator} from 'react-native';

const Stack = createNativeStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <Stack.Navigator>
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
  );
};

const DashboardNavigator = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export const NavigationContainer = () => {
  const {initializing, isAuthenticated} = useIsAuthed();

  if (initializing && !isAuthenticated) {
    return <ActivityIndicator size={20} color="blue" />;
  }

  if (isAuthenticated) {
    return <DashboardNavigator />;
  }

  return <OnboardingStackNavigator />;
};
