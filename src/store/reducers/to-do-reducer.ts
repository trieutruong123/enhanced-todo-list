import { compareAsc } from "date-fns";
import { TodoActions, TodosStore, TodoActionTypes } from "types";
import { All_Todos } from "constants/index";

const initialState: TodosStore = {
  todos: [],
  filterTerm: {
    memberId: All_Todos,
  },
};

const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TO_DO:
      const newTodo = action.payload.value;
      if (compareAsc(new Date(), newTodo.date) >= 0) {
        newTodo.isOutOfDate = newTodo.isCompleted ? false : true;
        newTodo.isNotified = newTodo.isCompleted || newTodo.isOutOfDate;
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
              todo.isNotified = todo.isCompleted;
            }
          }
          return todo;
        }),
      };
    case TodoActionTypes.MARK_AS_OUT_OF_DATE:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (
            item.id === action.payload.value &&
            compareAsc(new Date(), item.date) >= 0
          ) {
            item.isOutOfDate = item.isCompleted ? false : true;
          }
          return item;
        }),
      };
    case TodoActionTypes.MARK_TODO_AS_NOTIFIED:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.value) item.isNotified = true;
          return item;
        }),
      };
    case TodoActionTypes.RECEIVE_ALL_TO_DOS:
      const newTodos = action.payload.value.map((todo) => {
        const isOutOfDate = compareAsc(new Date(), todo.date) >= 0;
        todo.isOutOfDate = !isOutOfDate || todo.isCompleted ? false : true;
        todo.isNotified = todo.isCompleted || todo.isOutOfDate;

        return todo;
      });
      return { ...state, todos: newTodos };
    case TodoActionTypes.FILTER_BY_MEMBER_ID:
      return {
        ...state,
        filterTerm: {
          ...state.filterTerm,
          memberId: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default todoReducer;
