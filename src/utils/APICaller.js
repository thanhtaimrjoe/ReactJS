import axios from "axios";
import { API_URL } from "../constants/ActionTypes";

export default async function callAPI(endpoint, method = "GET", body) {
  try {
    return await axios({
      method: method,
      url: `${API_URL}/${endpoint}`,
      data: body,
    });
  } catch (error) {
    return console.log(error);
  }
}
