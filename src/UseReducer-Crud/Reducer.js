import {CREATE,POST,GET,FETCH,FETCH_ID} from './Type';

const initialState = {
  todos: [],
  todo: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case POST:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };
    case GET:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case FETCH:
      return {
        ...state,
        todos: action.payload,
      };
    case FETCH_ID:
      return {
        ...state,
        todo: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;