import { All_Todos } from "constants/index";
import { TodoItem, TodosStore } from "types";

export const getVisibleTodos = (state: TodosStore): Array<TodoItem> => {
  if (state.filterTerm.memberId === All_Todos) return state.todos;
  const res = state.todos.filter(
    (item) => item.assignedMemberId === state.filterTerm.memberId
  );
  return res;
};
