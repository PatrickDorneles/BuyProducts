import styled from "styled-components";
import { color } from "../../src/styles/colors";

export const ProductPageContainer = styled.div``

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16%;
  padding-top: 20px;
  padding-bottom: 40px;
`

export const ProductImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 4px;

  object-fit: contain;

  margin-bottom: 20px;
`

export const ProductTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin: 8px;

  text-align: centers;
`

export const ProductPrice = styled.span`
  font-size: 36px;
  font-weight: 600;
  margin: 16px 0 24px;
`

export const DescriptionLabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;

  margin-bottom: 8px;
`

export const ProductDescriptionLabel = styled.span`
  font-weight: 500;
`

export const LineDescription = styled.div`
  flex: 1;
  height: 2px;
  background-color: #ddd;
`

export const ProductDescription = styled.p`

`

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BuyButton = styled.button`
  background-color: ${color.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 2px;

  cursor: pointer;
  transition: .2s;

  margin: 8px;

  &:hover {
    background-color: ${color.primaryDarker};
  }

  &:active {
    background-color: white;
    color: ${color.primary};
  }
`

export const AddToCartButton = styled.button`
  background: transparent;
  color: ${color.primary};
  padding: 10px 20px;
  border: none;
  border-radius: 2px;

  cursor: pointer;
  transition: .2s;

  margin: 8px;

  &:hover {
    color: ${color.primaryDarker};
  }

  &:active {
    background-color: ${color.primaryDarker};
    color: white;
  }
`