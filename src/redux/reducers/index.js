import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productsReducer";
import { categoryReducer } from "./categoryReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  category: categoryReducer,
  cartList: cartReducer
})

export default reducers;
