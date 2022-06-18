import { FETCH_CATEGORIES } from "../constants/ActionTypes";
import { fetchAllCategory } from "../utils/firebaseAction";

export const actFetchCategoriesRequest = () => {
  return async (dispatch) => {
    const result = await fetchAllCategory("category");
    dispatch(actFetchCategories(result));
  };
};

export const actFetchCategories = (categories) => {
  return {
    type: FETCH_CATEGORIES,
    categories,
  };
};
