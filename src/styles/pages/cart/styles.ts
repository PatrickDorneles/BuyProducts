import styled from "styled-components";
import { color } from "../../colors";

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`

export const InCartProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 2% 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px #0004;
`

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const FinalizeButton = styled.button`
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

export const AddMoreProductsButton = styled.button`
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

export const ClearCartButton = styled.button`
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

export const TotalPrice = styled.span`
  display: inline-block;
  font-size: 20px;
  margin: 8px 0 16px;

  text-align: center;
`