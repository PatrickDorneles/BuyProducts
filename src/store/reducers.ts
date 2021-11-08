import { combineReducers } from "redux";

import { CartReducer } from "./cart/reducer";
import { ProductsReducer } from "./products/reducer";
import { TitleReducer } from "./title/reducer";

export const reducers = combineReducers({
  cart: CartReducer,
  products: ProductsReducer,
  title: TitleReducer
})