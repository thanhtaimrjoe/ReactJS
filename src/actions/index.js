import {
  CLOSE_FORM,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TABLE,
  LIST_ALL,
  OPEN_FORM,
  SAVE_TASK,
  SEARCH,
  SORT,
  TOGGLE_FORM,
  UPDATE_STATUS,
} from "../constants/ActionTypes";
export const actListAll = () => {
  return {
    type: LIST_ALL,
  };
};
export const actSaveTask = (task) => {
  return {
    type: SAVE_TASK,
    task,
  };
};
export const actToggleForm = () => {
  return {
    type: TOGGLE_FORM,
  };
};
export const actCloseForm = () => {
  return {
    type: CLOSE_FORM,
  };
};
export const actOpenForm = () => {
  return {
    type: OPEN_FORM,
  };
};
export const actUpdateStatus = (id) => {
  return {
    type: UPDATE_STATUS,
    id,
  };
};
export const actDeleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id,
  };
};
export const actEditTask = (task) => {
  return {
    type: EDIT_TASK,
    task,
  };
};
export const actFilterTable = (filter) => {
  return {
    type: FILTER_TABLE,
    filter,
  };
};
export const actSearchTask = (keyword) => {
  return {
    type: SEARCH,
    keyword,
  };
};
export const actSortTask = (sort) => {
  return {
    type: SORT,
    sort,
  };
};
