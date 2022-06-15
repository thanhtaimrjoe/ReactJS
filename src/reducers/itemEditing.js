import { EDIT_TASK } from "../constants/ActionTypes";

var inititalState = {
  id: "",
  name: "",
  status: false,
};

var myReducer = (state = inititalState, action) => {
  switch (action.type) {
    case EDIT_TASK:
      return action.task;
    default:
      return state;
  }
};
export default myReducer;
