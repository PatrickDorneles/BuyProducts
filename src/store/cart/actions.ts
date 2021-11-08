import { createAction } from "@reduxjs/toolkit";

import { InCartProduct } from "../../types/product/in_cart";

enum CartActionTypes {
  ADD_PRODUCT_TO_CART = "@car/add_product_to_cart"
}

export const AddProductToCartAction = createAction<InCartProduct>(
  CartActionTypes.ADD_PRODUCT_TO_CART
)