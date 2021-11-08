import { useProducts } from "../../store/products/hook";
import { ListProduct } from "./ListProduct";
import { ProductsListContainer } from "./styles";

export function ProductsList() {
  const { productsState } = useProducts()

  if (productsState.loading) {
    return (
      <>
        loading
      </>
    )
  }
  return (
    <ProductsListContainer>
      {productsState.data.map((product) => (
        <ListProduct key={product.id} product={product} />
      ))}
    </ProductsListContainer>
  )
}