import { useCart } from "../../store/cart/hook";
import { CartIconButton, QuantityCircle, QuantityNumber, StyledCartIconSvg } from "./styles";

export function CartIcon() {
  const { getInCartQuantity } = useCart()

  
  return (
    <CartIconButton>
      <StyledCartIconSvg />
      { getInCartQuantity() > 0 ? 
        <QuantityCircle>
          <QuantityNumber>1</QuantityNumber>
        </QuantityCircle> 
      : ''}
    </CartIconButton>
  )
}