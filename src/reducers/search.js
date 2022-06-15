import { SEARCH } from "../constants/ActionTypes";

var inititalState = "";

var myReducer = (state = inititalState, action) => {
  switch (action.type) {
    case SEARCH:
      return action.keyword;
    default:
      return state;
  }
};
export default myReducer;
