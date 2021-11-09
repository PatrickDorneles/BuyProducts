import { createReducer } from "@reduxjs/toolkit";
import { InCartProduct } from "../../types/product/in_cart";
import { AddProductToCartAction, ChangeItemQuantityAction, ClearCartAction, RemoveProductFromCartAction } from "./actions";

export const CartReducer = createReducer<InCartProduct[]>([], (builder) => {
  builder.addCase(AddProductToCartAction, (state, action) => {
    const inCartProduct = state.find((product) => product.id === action.payload.id)

    if(inCartProduct) {
      const stateWithoutProduct = state.filter((product) => product.id !== inCartProduct.id)

      return [
        { ...inCartProduct, quantity: inCartProduct.quantity + 1 },
        ...stateWithoutProduct
      ]
    }

    const newState = [...state]
    newState.push({ ...action.payload, quantity: 1 })
    return newState;
  })

  builder.addCase(ChangeItemQuantityAction, (state, action) => {
    const inCartProduct = state.find((product) => product.id === action.payload.id)

    if(inCartProduct) {
      const stateWithoutProduct = state.filter((product) => product.id !== inCartProduct.id)

      if(inCartProduct.quantity + action.payload.change <= 0) {
        return stateWithoutProduct
      }

      return [
        { ...inCartProduct, quantity: inCartProduct.quantity + action.payload.change },
        ...stateWithoutProduct
      ]
    }

    return state
  })

  builder.addCase(RemoveProductFromCartAction, (state, action) => {
    return state.filter(product => product.id !== action.payload)
  })

  builder.addCase(ClearCartAction, () => {
    return []
  })

})