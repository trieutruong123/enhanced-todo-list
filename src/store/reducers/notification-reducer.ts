import {
  NotificationsStore,
  NotificationActions,
  NotificationActionTypes,
} from "./../../types/notification.type";

const initialState: NotificationsStore = {
  notis: [],
};

const notificationReducer = (
  state = initialState,
  action: NotificationActions
) => {
  switch (action.type) {
    case NotificationActionTypes.PUSH_NEW_MESSAGE:
      const res = [...state.notis, action.payload.value];
      return {
        ...state,
        notis: res,
      };
    case NotificationActionTypes.POP_FIRST_NOTIFICATION:
      return {
        ...state,
        notis: state.notis.slice(1),
      };
    default:
      return state;
  }
};

export default notificationReducer;
