import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import TodoApp from './src/components/todo/TodoApp';

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
