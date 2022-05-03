import { compareAsc } from "date-fns";
import { TodoActions, TodosStore, TodoActionTypes } from "./../../types/index";

const initialState: TodosStore = {
  todos: [],
};

const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TO_DO:
      const newTodo = action.payload.value;
      if (compareAsc(new Date(), newTodo.date) >= 0) {
        newTodo.isOutOfDate = newTodo.isCompleted ? false : true;
      }
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case TodoActionTypes.DELETE_TO_DO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.value),
      };
    case TodoActionTypes.MARK_AS_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.value) {
            todo.isCompleted = !todo.isCompleted;
            if (compareAsc(new Date(), todo.date) >= 0) {
              todo.isOutOfDate = todo.isCompleted ? false : true;
            }
          }
          return todo;
        }),
      };
    case TodoActionTypes.RECEIVE_ALL_TO_DOS:
      const newTodos = action.payload.value.map((todo) => {
        if (compareAsc(new Date(), todo.date) >= 0) {
          todo.isOutOfDate = todo.isCompleted ? false : true;
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};

export default todoReducer;
