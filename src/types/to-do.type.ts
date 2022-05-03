export type TodoItem = {
  id: string;
  title: string;
  assignedMemberId: string;
  date: Date;
  isCompleted: boolean;
  isOutOfDate: boolean;
};

export type TodosStore = {
  todos: Array<TodoItem>;
};

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum TodoActionTypes {
  ADD_TO_DO = "ADD_TO_DO",
  DELETE_TO_DO = "DELETE_TO_DO",
  GET_ALL_TO_DOS = "GET_ALL_TO_DOS",
  MARK_AS_COMPLETED = "MARK_AS_COMPLETED",
  RECEIVE_ALL_TO_DOS = "RECEIVE_ALL_TO_DOS",
  RECEIVE_ALL_MEMBERS = "RECEIVE_ALL_MEMBERS",
}

export interface TodoPayload {
  [TodoActionTypes.ADD_TO_DO]: {
    value: TodoItem;
  };
  [TodoActionTypes.DELETE_TO_DO]: {
    value: string;
  };
  [TodoActionTypes.GET_ALL_TO_DOS]: {};
  [TodoActionTypes.MARK_AS_COMPLETED]: {
    value: string;
  };
  [TodoActionTypes.RECEIVE_ALL_TO_DOS]: {
    value: Array<TodoItem>;
  };
}

export type TodoActions = ActionMap<TodoPayload>[keyof ActionMap<TodoPayload>];
