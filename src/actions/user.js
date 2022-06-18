import { GET_USER } from "../constants/ActionTypes";
import getAllDocsByCollection from "../utils/firebaseAction";

export const actFetchUserRequest = () => {
  return async (dispatch) => {
    const colList = await getAllDocsByCollection("category");
    console.log(colList);
    dispatch(actFetchUser(colList));
  };
};

export const actFetchUser = (user) => {
  return {
    type: GET_USER,
    user,
  };
};
