import { useRouter } from "next/dist/client/router";
import { Product } from "../../../types/product";
import { ListProductContainer, ProductImage, ProductPrice, ProductTitle } from "./styles";

type Props = {
  product: Product
}

export function ListProduct({ product }: Props) {
  const router = useRouter()

  function redirectToProductPage() {
    router.push(`/product/${product.id}`)
  }

  return (
    <ListProductContainer onClick={redirectToProductPage}>
      <ProductImage src={product.image} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>R$ {product.price}</ProductPrice>
    </ListProductContainer>
  )
}