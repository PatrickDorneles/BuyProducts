import styled from "styled-components";
import { color } from "../../colors";

export const CartPageContainer = styled.div``

export const InCartProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 2% 60px;
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