const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action:) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TO_DO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case 'MARK_AS_COMPLETED':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) todo.completed = !todo.completed;
          return todo;
        }),
      };

    case 'GET_ALL_TO_DOS':
      return { ...state, todos: action.payload.initialData };
    default:
      return state;
  }
};
export default todoReducer;
