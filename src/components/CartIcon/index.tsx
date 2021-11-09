import { useRouter } from "next/dist/client/router";
import { useCart } from "../../store/cart/hook";
import { CartIconButton, QuantityCircle, QuantityNumber, StyledCartIconSvg } from "./styles";

export function CartIcon() {
  const { quantity } = useCart()
  const router = useRouter()

  function goToCart() {
    router.push('/cart')
  }
  
  return (
    <CartIconButton onClick={goToCart}>
      <StyledCartIconSvg />
      { quantity > 0 ? 
        <QuantityCircle>
          <QuantityNumber>{quantity}</QuantityNumber>
        </QuantityCircle> 
      : ''}
    </CartIconButton>
  )
}