import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { InCartProductComponent } from "../../src/components/InCartProduct"
import { Navbar } from "../../src/components/Navbar"
import { useCart } from "../../src/store/cart/hook"
import { useTitle } from "../../src/store/title/hook"
import { AddMoreProductsButton, ButtonArea, CartPageContainer, ClearCartButton, FinalizeButton, InCartProductListContainer, TotalPrice } from "../../src/styles/pages/cart/styles"

function CartPage() {
  const router = useRouter()
  const { changeTitle } = useTitle()
  const { cart, clearCart, totalPrice } = useCart()

  useEffect(() => {
    changeTitle('Carrinho')
  }, [])


  function goToProducts() {
    router.push('/')
  }  

  function mapProductsToComponent() {
    return cart.map((inCartProduct) => {
      return <InCartProductComponent product={inCartProduct} key={inCartProduct.id} />
    })
  }

  function buyCart() {
    const productsToBuy = cart

    /**
     * Do something to buy products
     */

    clearCart()
    router.push('/')
  }

  return (
    <CartPageContainer>
      <Navbar back />
      <InCartProductListContainer>
        {mapProductsToComponent()}
        <AddMoreProductsButton onClick={goToProducts} > ADICIONAR PRODUTO </AddMoreProductsButton>
      </InCartProductListContainer>
      <TotalPrice> Preço Total: <strong> R$ {totalPrice} </strong> </TotalPrice>
      <ButtonArea>
        <FinalizeButton onClick={buyCart} > FINALIZAR </FinalizeButton>
        <ClearCartButton onClick={clearCart}> LIMPAR CARRINHO </ClearCartButton>
      </ButtonArea>
    </CartPageContainer>
  )
}

export default CartPage