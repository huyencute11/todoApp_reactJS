import {
  SET_TODO_INPUT,
  ADD_TODO_INPUT,
  DELETE_TODO_INPUT,
  TOGGLE_COMPLETE,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
} from "./constant.js";
export const setTodoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
};
export const addTodoInput = (payload) => {
  return {
    type: ADD_TODO_INPUT,
    payload,
  };
};
export const deleteTodoInput = (payload) => {
  return {
    type: DELETE_TODO_INPUT,
    payload,
  };
};
export const toggleComplete = (payload) => {
  return {
    type: TOGGLE_COMPLETE,
    payload,
  };
};
export const changeFilter = (payload) => {
  return {
    type: CHANGE_FILTER,
    payload,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
