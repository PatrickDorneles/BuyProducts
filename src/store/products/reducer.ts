import { createReducer } from "@reduxjs/toolkit";
import { FailureGetProductsAction, ProductsState, RequestLoadProductsAction, SuccessLoadProductsAction } from "./actions";

const INITIAL_STATE: ProductsState = {
  data: [],
  loading: false,
  error: false
}

export const ProductsReducer = createReducer<ProductsState>(INITIAL_STATE, (builder) => {
  builder.addCase(RequestLoadProductsAction, (state) => {
    return {
      ...state,
      loading: true
    }
  })

  builder.addCase(SuccessLoadProductsAction, (state, action) => {
    return {
      data: action.payload,
      error: false,
      loading: false
    }
  })

  builder.addCase(FailureGetProductsAction, (state, action) => {
    return {
      data: [],
      error: true,
      loading: false
    }
  })
})