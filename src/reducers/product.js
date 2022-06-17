import { EDIT_PRODUCT } from "../constants/ActionTypes";
var initialState = {
  name: "",
  price: 0,
  status: false,
};

const myReducers = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      state = action.product;
      return state;
    default:
      return state;
  }
};
export default myReducers;
