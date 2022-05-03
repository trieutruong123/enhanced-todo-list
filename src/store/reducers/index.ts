import { combineReducers } from "redux";
import memberReducer from "./member-reducer";
import todoReducer from "./to-do-reducer";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  memberReducer: memberReducer,
});

export default rootReducer;
