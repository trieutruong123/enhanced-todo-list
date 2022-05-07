import { compareAsc } from "date-fns";
import { TodoItem, TodosStore } from "./../../types/to-do.type";
import { v4 as uuidv4 } from "uuid";
import { NotificationActionTypes } from "../../types/notification.type";
import { NotificationVariant } from "types";
import { markItemOutOfDate, markTodoAsNotified } from "./to-do-action";

export const pushNotification =
  (message: string, variant: NotificationVariant) =>
  (dispatch: any, getState: any) => {
    const payload = {
      value: {
        id: uuidv4(),
        message: message,
        variant: variant,
      },
    };
    return dispatch({
      type: NotificationActionTypes.PUSH_NEW_MESSAGE,
      payload,
    });
  };

export const popFirstNotification = () => (dispatch: any, getState: any) => {
  return dispatch({
    type: NotificationActionTypes.POP_FIRST_NOTIFICATION,
  });
};

export const notifyOutOfDateTodos = () => (dispatch: any, getState: any) => {
  const state = getState();
  const todos = state.todoReducer.todos;
  todos.map((todo: TodoItem) => {
    if (!todo.isNotified && !todo.isCompleted) {
      if (compareAsc(new Date(), todo.date) > 0) {
        dispatch(pushNotification(`${todo.title} is out of date`, "success"));
        dispatch(markTodoAsNotified(todo.id));
      }
      if (
        compareAsc(Date.now(), todo.date) <= 0 &&
        compareAsc(Date.now() + 30 * 60 * 1000, todo.date) > 0
      ) {
        const leftMinutes = Math.floor(
          (todo.date.getTime() - Date.now()) / (60 * 1000)
        );
        dispatch(
          pushNotification(
            `${leftMinutes} minutes until ${todo.title} is out of date`,
            "success"
          )
        );
        dispatch(markTodoAsNotified(todo.id));
      }
    }
  });
};
