import { GET_USER } from "../constants/ActionTypes";
import { checkUser } from "../utils/firebaseAction";

export const actCheckUser = (user) => {
  return async (dispatch) => {
    const result = await checkUser("user", user);
    dispatch(actFetchUser(result));
  };
};

export const actFetchUser = (user) => {
  return {
    type: GET_USER,
    user,
  };
};
