import { AxiosResponse } from 'axios';
import { put, call } from 'redux-saga/effects'
import { api } from '../../services/api'
import { Product } from '../../types/product';
import { FailureGetProductsAction,  SuccessLoadProductsAction } from './actions'

export function* loadProducts() {
  try {
    const response: AxiosResponse<Product[]> = yield call(api.get, 'products'); 

    yield put(SuccessLoadProductsAction(response.data))
  } catch (error) {
    yield put(FailureGetProductsAction())
  }
}