const INITIAL_STATE = {
  todos: [
    { id: 1, text: "ReactJS" },
    { id: 2, text: "ReactNative" },
    { id: 3, text: "Redux" }
  ],
  inputTodo: ""
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state.todos, { id: Math.random(), text: action.payload.text }];
    case "REMOVE_TODO":
      return state.todos.filter(todo => todo.id !== action.payload.id);
    case "INPUT_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state.todos;
  }
}
