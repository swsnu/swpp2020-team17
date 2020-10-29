import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todos: [
  ],
  selectedTodo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        id: action.id,
        title: action.title,
        content: action.content,
        year: action.year,
        month: action.month,
        date: action.date,
        done: action.done,
      };
      return { ...state, todos: state.todos.concat(newTodo) };
    case actionTypes.DELETE_TODO:
      const deletedTodos = state.todos.filter((todo) => {
        return todo.id !== action.targetID;
      });
      return { ...state, todos: deletedTodos };
    case actionTypes.TOGGLE_DONE:
      const modified = state.todos.map((todo) => {
        if (todo.id === action.targetID) {
          return { ...todo, done: !todo.done };
        } else {
          return { ...todo };
        }
      });
      return { ...state, todos: modified };
    case actionTypes.GET_TODO:
      return { ...state, selectedTodo: action.target };
    case actionTypes.GET_ALL:
      return { ...state, todos: action.todos };
    default:
      break;
  }
  return state;
};

export default reducer;
