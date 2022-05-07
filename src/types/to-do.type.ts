export type TodoItem = {
  id: string;
  title: string;
  assignedMemberId: string;
  date: Date;
  isCompleted: boolean;
  isOutOfDate?: boolean;
  isNotified?: boolean;
};

export type TodosStore = {
  todos: Array<TodoItem>;
  filterTerm: {
    memberId: string;
  };
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
  MARK_AS_OUT_OF_DATE = "MARK_AS_OUT_OF_DATE",
  MARK_TODO_AS_NOTIFIED = "MARK_TODO_AS_NOTIFIED",
  RECEIVE_ALL_TO_DOS = "RECEIVE_ALL_TO_DOS",
  RECEIVE_ALL_MEMBERS = "RECEIVE_ALL_MEMBERS",
  FILTER_BY_MEMBER_ID = "FILTER_BY_MEMBER_ID",
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
  [TodoActionTypes.MARK_AS_OUT_OF_DATE]: {
    value: string;
  };
  [TodoActionTypes.MARK_TODO_AS_NOTIFIED]: {
    value: string;
  };
  [TodoActionTypes.RECEIVE_ALL_TO_DOS]: {
    value: Array<TodoItem>;
  };
  [TodoActionTypes.FILTER_BY_MEMBER_ID]: {
    value: string;
  };
}

export type TodoActions = ActionMap<TodoPayload>[keyof ActionMap<TodoPayload>];
