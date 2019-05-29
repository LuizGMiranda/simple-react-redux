const INITIAL_STATE = {
  text: ""
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "WRITE_INPUT":
      return { ...state, text: action.payload.text };
    case "CLEAN_INPUT":
      return { ...state, text: "" };
    default:
      return state;
  }
}
