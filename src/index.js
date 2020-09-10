import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store'

// Provider为里面所包含的所有组件都提供了store
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

