import { combineReducers } from "redux";
import user from "./user";
import categories from "./categories";

const myReducers = combineReducers({
  user,
  categories,
});

export default myReducers;
