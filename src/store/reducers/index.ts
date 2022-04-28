import { combineReducers } from 'redux';
import todoReducer from './to-do-reducer';

const rootReducer = combineReducers({ todoReducer: todoReducer });

export default rootReducer;
