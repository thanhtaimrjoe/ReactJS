import { combineReducers } from "redux";
import user from "./user";
import categories from "./categories";
import products from "./products";
import product from "./product";

const myReducers = combineReducers({
  user,
  categories,
  products,
  product,
});

export default myReducers;
