import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Navbar } from "../../src/components/Navbar";
import { useCart } from "../../src/store/cart/hook";
import { useProducts } from "../../src/store/products/hook";
import { useTitle } from "../../src/store/title/hook";
import { Product } from "../../src/types/product";
import { AddToCartButton, ButtonArea, BuyButton, DescriptionLabelContainer, LineDescription, ProductContainer, ProductDescription, ProductDescriptionLabel, ProductImage, ProductPageContainer, ProductPrice, ProductTitle } from "../../src/styles/pages/product/styles";

function ProductPage() {
  const router = useRouter()
  const { changeTitle } = useTitle()
  const { productsState } = useProducts()
  const { addProductToCart } = useCart()
  const [product, setProduct] = useState<Product>()

  const { id } = router.query

  useEffect(() => { 
    setProduct(() => {
      return productsState.data.find((product) => product.id === Number(id));
    })
  }, [id, productsState])

  useEffect(() => {
    changeTitle(product?.title ?? '')
  }, [changeTitle, product])
  
  function buyProduct() {
    addProductToCart(product!)
    router.push('/cart')
  }


  function addToCart() {
    addProductToCart(product!)
    router.push('/')
  }

  return (
    <ProductPageContainer>
      <Navbar back cart />
      <ProductContainer>
        <ProductImage src={product?.image} />
        <ProductTitle> {product?.title} </ProductTitle>
        <ProductPrice>R$ {product?.price} </ProductPrice>
        <DescriptionLabelContainer>
          <ProductDescriptionLabel>Descrição</ProductDescriptionLabel>
          <LineDescription />
        </DescriptionLabelContainer>
        <ProductDescription>{product?.description}</ProductDescription>
        <ButtonArea>
          <BuyButton onClick={buyProduct}> COMPRAR </BuyButton>
          <AddToCartButton onClick={addToCart}> ADICIONAR AO CARRINHO </AddToCartButton>
        </ButtonArea>
      </ProductContainer>
    </ProductPageContainer>
  )
}

export default ProductPage