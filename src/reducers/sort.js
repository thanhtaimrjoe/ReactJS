import { SORT } from "../constants/ActionTypes";

var inititalState = {
  by: "name",
  value: 1,
};

var myReducer = (state = inititalState, action) => {
  switch (action.type) {
    case SORT:
      return action.sort;
    default:
      return state;
  }
};
export default myReducer;
