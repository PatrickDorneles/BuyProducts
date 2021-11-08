import { useDispatch, useSelector } from "react-redux"
import { RootState } from ".."
import { RequestLoadProductsAction } from "./actions"

export function useProducts() {
  const productsState = useSelector((store: RootState) => store.products)
  const dispatch = useDispatch()

  function loadProducts() {
    dispatch(RequestLoadProductsAction())
  }

  return {
    productsState,
    loadProducts
  }
}