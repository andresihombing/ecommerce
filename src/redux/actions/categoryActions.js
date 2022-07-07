import { ActionTypes } from "../constants/actionTypes";

export const setCategory = (category) => {
  return {
    type: ActionTypes.SET_CATEGORY,
    payload: category
  }
}