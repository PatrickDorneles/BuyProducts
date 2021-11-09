import { useEffect } from "react"
import { InCartProductComponent } from "../../src/components/InCartProduct"
import { Navbar } from "../../src/components/Navbar"
import { useCart } from "../../src/store/cart/hook"
import { useTitle } from "../../src/store/title/hook"
import { ButtonArea, CartPageContainer, ClearCartButton, FinalizeButton, InCartProductListContainer } from "./styles"

function CartPage() {
  const { changeTitle } = useTitle()
  const { cart, clearCart } = useCart()

  useEffect(() => {
    changeTitle('Carrinho de Compras')
  }, [])
  

  function mapProductsToComponent() {
    return cart.map((inCartProduct) => {
      return <InCartProductComponent product={inCartProduct} key={inCartProduct.id} />
    })
  }

  return (
    <CartPageContainer>
      <Navbar back />
      <InCartProductListContainer>
        {mapProductsToComponent()}
      </InCartProductListContainer>
      <ButtonArea>
        <FinalizeButton> FINALIZAR </FinalizeButton>
        <ClearCartButton onClick={clearCart}> LIMPAR CARRINHO </ClearCartButton>
      </ButtonArea>
    </CartPageContainer>
  )
}

export default CartPage