import { ADD_TASK, LIST_ALL } from "../constants/ActionTypes";
export const actListAll = () => {
  return {
    type: LIST_ALL,
  };
};
export const actAddTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  };
};
