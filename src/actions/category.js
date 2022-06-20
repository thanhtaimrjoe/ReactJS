import {
  ADD_NEW_CATEGORY,
  FETCH_CATEGORIES,
  UPDATE_CATEGORY,
} from "../constants/ActionTypes";
import {
  addNewCategory,
  fetchAllCategory,
  updateCategory,
} from "../utils/firebaseAction";

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

export const actAddNewCategoryRequest = (category, file) => {
  return async (dispatch) => {
    var newCategory = await addNewCategory("category", category, file);
    dispatch(actAddNewCategory(newCategory));
  };
};

export const actAddNewCategory = (newCategory) => {
  return {
    type: ADD_NEW_CATEGORY,
    newCategory,
  };
};
