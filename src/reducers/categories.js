import {
  ADD_NEW_CATEGORY,
  FETCH_CATEGORIES,
  UPDATE_CATEGORY,
} from "../constants/ActionTypes";
var initialState = [];

const myReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.categories;
    case UPDATE_CATEGORY:
      return [...state];
    case ADD_NEW_CATEGORY:
      state.push(action.newCategory);
      return [...state];
    default:
      return state;
  }
};
export default myReducers;
