import { all, takeLatest } from "redux-saga/effects";
import { ProductActionTypes } from "./products/actions";
import { loadProducts } from "./products/sagas";

export function* root() {
  yield all([
    takeLatest(ProductActionTypes.REQUEST_LOAD_PRODUCTS, loadProducts)
  ])
}