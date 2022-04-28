import { v4 as uuid } from 'uuid';
import {
  ADD_TO_DO,
  DELETE_TO_DO,
  MARK_AS_COMPLETED,
  GET_ALL_TO_DOS,
} from '../types';

export const  addToDo = (content)=> (dispatch,getState) =>{
  const payload = {
    id: uuid(),
    title: content,
    completed: false,
  };
  dispatch( {
    type: ADD_TO_DO,
    payload,
  });
}
export const  deleteToDo = (id)=>(dispatch,getState)=> {
  const payload = { id };
  dispatch( {
    type: DELETE_TO_DO,
    payload,
  });
}

export const  markItemAsCompleted = (id) => (dispatch,getState)=>{
  const payload = { id };
  dispatch( {
    type: MARK_AS_COMPLETED,
    payload,
  });
}

export const  getAllTodos = (initialData)=>(dispatch,getState)=> {
  const payload = { initialData };
  dispatch( {
    type: GET_ALL_TO_DOS,
    payload,
  });
}
