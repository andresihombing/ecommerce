import { ActionTypes } from "../constants/actionTypes";

export const setCart = (cart) => {
  return {
    type: ActionTypes.SET_CART,
    payload: cart
  }
}

export const countCart = (count) => {
  return {
    type: ActionTypes.COUNT_CART,
    payload: count
  }
}