import {
  DELETE_TASK,
  LIST_ALL,
  SAVE_TASK,
  UPDATE_STATUS,
} from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";

var data = JSON.parse(localStorage.getItem("tasks"));
var inititalState = data ? data : [];

var findIndex = (id, tasks) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

var index = -1;

var myReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LIST_ALL:
      return state;
    case SAVE_TASK:
      var task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status,
      };
      if (!task.id) {
        task.id = uuidv4();
        state.push(task);
      } else {
        index = findIndex(task.id, state);
        state[index] = task;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case UPDATE_STATUS:
      index = findIndex(action.id, state);
      if (index !== -1) {
        //way 1:
        // var cloneTask = { ...state[index] };
        // cloneTask.status = !cloneTask.status;
        // state[index] = cloneTask;
        //--------------------------
        //way 2:
        state[index] = {
          ...state[index],
          status: !state[index].status,
        };
        // cloneTask[index].status = !newState[index].status;
        localStorage.setItem("tasks", JSON.stringify(state));
      }
      return [...state];
    case DELETE_TASK:
      index = findIndex(action.id, state);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(state));
      }
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
