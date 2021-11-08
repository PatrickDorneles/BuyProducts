import { createAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

export enum ProductActionTypes {
  REQUEST_LOAD_PRODUCTS = "@async_products/request_load_products",
  SUCCESS_LOAD_PRODUCTS = "@async_products/success_load_products",
  FAILURE_LOAD_PRODUCTS = "@async_products/failure_load_products",
}

export const RequestLoadProductsAction = createAction(ProductActionTypes.REQUEST_LOAD_PRODUCTS)
export const SuccessLoadProductsAction = createAction<Product[]>(ProductActionTypes.SUCCESS_LOAD_PRODUCTS)
export const FailureGetProductsAction = createAction(ProductActionTypes.FAILURE_LOAD_PRODUCTS)

export interface ProductsState {
  data: Product[],
  error: boolean,
  loading: boolean
}