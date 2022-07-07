import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  cartList: [],
  count: 0
}

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART:
      return {
        ...state, cartList: payload
      };
    case ActionTypes.COUNT_CART:
      return {
        ...state, count: payload
      }
    default:
      return state;
  }
}