import { combineReducers } from "redux";
import memberReducer from "./member-reducer";
import todoReducer from "./to-do-reducer";
import notificationReducer from "./notification-reducer";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  memberReducer: memberReducer,
  notificationReducer: notificationReducer,
});

export default rootReducer;
