import { Product } from "../../../types/product";
import { ListProductContainer, ProductImage, ProductPrice, ProductTitle } from "./styles";

type Props = {
  product: Product
}

export function ListProduct({ product }: Props) {
  return (
    <ListProductContainer>
      <ProductImage src={product.image} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>R$ {product.price}</ProductPrice>
    </ListProductContainer>
  )
}