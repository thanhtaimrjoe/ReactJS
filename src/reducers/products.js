import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/ActionTypes";
var initialState = [];

const findIndex = (products, id) => {
  var result = -1;
  products.map((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};

const myReducers = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case FETCH_PRODUCT:
      state = action.products;
      return [...state];
    case DELETE_PRODUCT:
      index = findIndex(state, action.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    case ADD_PRODUCT:
      state.push(action.product);
      return [...state];
    case UPDATE_PRODUCT:
      index = findIndex(state, action.product.id);
      state[index] = action.product;
      return [...state];
    default:
      return [...state];
  }
};
export default myReducers;
