import { ADD_TASK, LIST_ALL } from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";

var data = JSON.parse(localStorage.getItem("tasks"));
var inititalState = data ? data : [];

var myReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LIST_ALL:
      return state;
    case ADD_TASK:
      var newTask = {
        id: uuidv4(),
        name: action.task.name,
        status: action.task.status,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
