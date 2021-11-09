import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from ".."
import { Product } from "../../types/product"
import { InCartProduct } from "../../types/product/in_cart"
import { AddProductToCartAction, ChangeItemQuantityAction, ClearCartAction, RemoveProductFromCartAction } from "./actions"

export function useCart() {
  const cart = useSelector((store: RootState) => store.cart)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  function addProductToCart(product: Product) {
    dispatch(AddProductToCartAction(product))
  }

  function changeItemQuantity(id: number, change: number) {
    dispatch(ChangeItemQuantityAction({id, change}))
  }

  function removeProductFromCart(id: number) {
    dispatch(RemoveProductFromCartAction(id))
  }

  function clearCart() {
    dispatch(ClearCartAction())
  }

  useEffect(() => {
    setQuantity(() => {
      let quantity = 0

      cart.forEach((product) => {
        quantity += product.quantity
      })

      return quantity
    })

    setTotalPrice(() => {
      let price = 0

      cart.forEach((product) => {
        price += product.price
      })

      return price
    })
  }, [cart])

  return {
    cart,
    quantity,
    totalPrice,
    addProductToCart,
    clearCart,
    changeItemQuantity,
    removeProductFromCart
  }
}