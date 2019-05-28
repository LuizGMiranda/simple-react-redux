import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import TodoList from "./TodoList";
import ButtonTodo from "./ButtonTodo";
import InputTodo from "./InputTodo";

function App() {
  return (
    <Provider store={store}>
      <InputTodo />
      <TodoList />
      <ButtonTodo />
    </Provider>
  );
}

export default App;
