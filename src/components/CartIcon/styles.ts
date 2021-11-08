import styled from "styled-components";
import CartIconSvg from '../../assets/svg/cart.svg'

export const CartIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 15px;
  
  background: none;
  border: none;

  cursor: pointer;

  border-radius: 50%;
  padding: 12px;

  transition: .2s;

  &:active {
    background: #fff6;
  }
`

export const StyledCartIconSvg = styled(CartIconSvg)`
  fill: white;
`

export const QuantityCircle = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;

  height: 18px;
  width: 18px;

  background: white;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const QuantityNumber = styled.span`
  
`