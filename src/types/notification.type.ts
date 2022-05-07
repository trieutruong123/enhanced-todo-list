export type NotificationVariant = "success" | "error" | "warning";

export type NotificationItem = {
  id: string;
  message: string;
  variant: NotificationVariant;
};

export type NotificationsStore = {
  notis: Array<NotificationItem>;
};

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum NotificationActionTypes {
  PUSH_NEW_MESSAGE = "PUSH_NEW_MESSAGE",
  POP_FIRST_NOTIFICATION = "POP_FIRST_NOTIFICATION",
}

export interface NotificationPayload {
  [NotificationActionTypes.PUSH_NEW_MESSAGE]: {
    value: NotificationItem;
  };
  [NotificationActionTypes.POP_FIRST_NOTIFICATION]: {};
}

export type NotificationActions =
  ActionMap<NotificationPayload>[keyof ActionMap<NotificationPayload>];
