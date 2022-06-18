import { FETCH_CATEGORIES } from "../constants/ActionTypes";
var initialState = [];

const myReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};
export default myReducers;
