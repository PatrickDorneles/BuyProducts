import { createReducer } from "@reduxjs/toolkit";
import { InCartProduct } from "../../types/product/in_cart";
import { AddProductToCartAction } from "./actions";

export const CartReducer = createReducer<InCartProduct[]>([], (builder) => {
  builder.addCase(AddProductToCartAction, (state, action) => {
    const newState = [...state]
    newState.push(action.payload)
    return newState;
  })
})