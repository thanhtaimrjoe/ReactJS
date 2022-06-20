import { FETCH_CATEGORIES, UPDATE_CATEGORY } from "../constants/ActionTypes";
import { fetchAllCategory, updateCategory } from "../utils/firebaseAction";

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

export const actUpdateCategoryRequest = (category, file) => {
  return async (dispatch) => {
    await updateCategory("category", category, file);
    dispatch(actUpdateCategory());
  };
};

export const actUpdateCategory = () => {
  return {
    type: UPDATE_CATEGORY,
  };
};
