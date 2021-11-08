import { useDispatch, useSelector } from "react-redux"
import { RootState } from ".."
import { Product } from "../../types/product"
import { InCartProduct } from "../../types/product/in_cart"
import { AddProductToCartAction } from "./actions"

export function useCart() {
  const cart = useSelector((store: RootState) => store.cart)
  const dispatch = useDispatch()

  function addProductToCart(product: InCartProduct) {
    dispatch(AddProductToCartAction(product))
  }

  function getInCartQuantity() {
    let quantity = 0

    cart.forEach((product) => {
      quantity += product.quantity
    })

    return quantity
  }

  return {
    cart,
    addProductToCart,
    getInCartQuantity
  }
}