import { useCart } from "../../store/cart/hook";
import { InCartProduct } from "../../types/product/in_cart";
import { ButtonArea, ChangeQuantityButton, ImageArea, InCartProductContainer, InfoContainer, MinusIcon, PlusIcon, ProductImage, ProductInfo, ProductPrice, ProductTitle, RemoveProductButton, RemoveProductIcon } from "./styles";

type Props = {
  product: InCartProduct
}

export function InCartProductComponent({ product }: Props) {
  const { removeProductFromCart, changeItemQuantity } = useCart()

  function handleDeleteButtonClick() {
    removeProductFromCart(product.id)
  }

  const PlusQuantityButton = (
    <ChangeQuantityButton onClick={() => changeItemQuantity(product.id, 1)}> 
      <PlusIcon />
    </ChangeQuantityButton>
  )

  const MinusQuantityButton = (
    <ChangeQuantityButton onClick={() => changeItemQuantity(product.id, -1)}> 
      <MinusIcon />
    </ChangeQuantityButton>
  )

  return (
    <InCartProductContainer>
      <ImageArea>
        <ProductImage src={product.image} />
      </ImageArea>
      <InfoContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductInfo>Categoria: <strong>{product.category}</strong></ProductInfo>
        <ProductInfo>Quantidade: <strong>{product.quantity}</strong> {MinusQuantityButton} {PlusQuantityButton} </ProductInfo>
        <ProductPrice>R$ {product.price}</ProductPrice>
      </InfoContainer>
      <ButtonArea>
        <RemoveProductButton onClick={handleDeleteButtonClick}>
          <RemoveProductIcon /> 
        </RemoveProductButton>
      </ButtonArea>
    </InCartProductContainer>
  )
}