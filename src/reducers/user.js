import { CLEAR_USER, GET_USER } from "../constants/ActionTypes";
var initialState = {};

const myReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case CLEAR_USER:
      state = initialState;
      return state;
    default:
      return state;
  }
};
export default myReducers;
