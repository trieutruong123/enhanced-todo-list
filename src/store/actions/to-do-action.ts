import { compareAsc } from "date-fns";
import { api } from "services";
import { v4 as uuidv4 } from "uuid";
import { TodoActionTypes, TodoItem } from "types";

export const addToDo =
  (content: string, assignedMemberId: string, date: Date) =>
  (dispatch: any, getState: any) => {
    const payload = {
      value: {
        id: uuidv4(),
        title: content,
        isCompleted: false,
        date,
        assignedMemberId,
        isOutOfDate: false,
      },
    };
    return dispatch({
      type: TodoActionTypes.ADD_TO_DO,
      payload,
    });
  };

export const deleteToDo = (id: string) => (dispatch: any, getState: any) => {
  const payload = { value: id };
  return dispatch({
    type: TodoActionTypes.DELETE_TO_DO,
    payload,
  });
};

export const markItemAsCompleted =
  (id: string) => (dispatch: any, getState: any) => {
    const payload = { value: id };
    return dispatch({
      type: TodoActionTypes.MARK_AS_COMPLETED,
      payload,
    });
  };

export const getAllTodos = () => async (dispatch: any, getState: any) => {
  const intialData = await api.requestTodos();
  const payload = { value: intialData };
  return dispatch({
    type: TodoActionTypes.RECEIVE_ALL_TO_DOS,
    payload,
  });
};

export const filterByMemberId =
  (id: string) => (dispatch: any, getState: any) => {
    const payload = { value: id };
    return dispatch({
      type: TodoActionTypes.FILTER_BY_MEMBER_ID,
      payload,
    });
  };

export const markItemOutOfDate =
  (id: string) => (dispatch: any, getState: any) => {
    const payload = { value: id };
    return dispatch({
      type: TodoActionTypes.MARK_AS_OUT_OF_DATE,
      payload,
    });
  };

export const markTodoAsNotified =
  (id: string) => (dispatch: any, getState: any) => {
    const payload = { value: id };
    return dispatch({
      type: TodoActionTypes.MARK_TODO_AS_NOTIFIED,
      payload,
    });
  };

export const checkOutOfDateTodo = () => (dispatch: any, getState: any) => {
  const state = getState();
  const todos = state.todoReducer.todos;
  todos.map((todo: TodoItem) => {
    if (compareAsc(new Date(), todo.date) >= 0) {
      dispatch(markItemOutOfDate(todo.id));
    }
  });
};
