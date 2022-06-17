import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/ActionTypes";
import callAPI from "../utils/APICaller";

export const actFetchAllProductsRequest = () => {
  return async (dispatch) => {
    const res = await callAPI("products", "GET", null);
    dispatch(actFetchAllProducts(res.data));
  };
};

export const actFetchAllProducts = (products) => {
  return {
    type: FETCH_PRODUCT,
    products,
  };
};

export const actDeleteProductRequest = (id) => {
  return async (dispatch) => {
    await callAPI(`products/${id}`, "DELETE", null);
    dispatch(actDeleteProduct(id));
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};

export const actAddProductRequest = (product) => {
  return async (dispatch) => {
    const res = await callAPI("products", "POST", product);
    dispatch(actAddProduct(res.data));
  };
};

export const actAddProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const actGetProductRequest = (id) => {
  return async (dispatch) => {
    const res = await callAPI(`products/${id}`, "GET", null);
    dispatch(actGetProduct(res.data));
  };
};

export const actGetProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};

export const actUpdateProductRequest = (product) => {
  return async (dispatch) => {
    const res = await callAPI(`products/${product.id}`, "PUT", product);
    dispatch(actUpdateProduct(res.data));
  };
};

export const actUpdateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
};
