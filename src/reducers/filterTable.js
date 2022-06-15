import { FILTER_TABLE } from "../constants/ActionTypes";

var inititalState = {
  name: "",
  status: -1,
};

var myReducer = (state = inititalState, action) => {
  switch (action.type) {
    case FILTER_TABLE:
      action.filter.status = parseInt(action.filter.status, 10);
      return action.filter;
    default:
      return state;
  }
};
export default myReducer;
