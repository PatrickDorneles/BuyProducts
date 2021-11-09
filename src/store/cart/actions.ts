import { createAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

import { InCartProduct } from "../../types/product/in_cart";

enum CartActionTypes {
  ADD_PRODUCT_TO_CART = "@cart/add_product_to_cart",
  CHANGE_ITEM_QUANTITY = "@cart/change_item_quantity",
  REMOVE_PRODUCT_FROM_CART = "@cart/remove_product_from_cart",
  CLEAR_CART = "@cart/clear_cart"
}

export const AddProductToCartAction = createAction<Product>(
  CartActionTypes.ADD_PRODUCT_TO_CART
)

export const ChangeItemQuantityAction = createAction<{ id: number, change: number }>(
  CartActionTypes.CHANGE_ITEM_QUANTITY
)

export const RemoveProductFromCartAction = createAction<number>(
  CartActionTypes.REMOVE_PRODUCT_FROM_CART
)

export const ClearCartAction = createAction(
  CartActionTypes.CLEAR_CART
)