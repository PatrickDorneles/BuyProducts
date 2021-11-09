import styled from "styled-components";
import DeleteIconSvg from '../../assets/svg/delete.svg'
import PlusIconSvg from '../../assets/svg/plus.svg'
import MinusIconSvg from '../../assets/svg/minus.svg'

export const InCartProductContainer = styled.div`
  display:flex;
  padding: 12px 0;

  border-bottom: 2px solid #ddd;
  gap: 12px;

  &:last-child {
    border-bottom: none;
  }

`

export const ImageArea = styled.div``

export const InfoContainer = styled.div`
  flex: 1;
`

export const ButtonArea = styled.div``

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;

  margin-bottom: 4px;
  object-fit: contain;
`

export const ProductTitle = styled.span`
  display: block;

  font-weight: 600;
  font-size: 16px;

  margin-bottom: 10px;
`

export const ProductInfo = styled.span`
  display: flex;
  align-items: center;
  margin: 4px 0;
  font-size: 14px;
`

export const RemoveProductButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  
  background: none;
  border: none;

  cursor: pointer;

  border-radius: 50%;
  padding: 12px;

  transition: .2s;

  &:active {
    background: #0004;
  }
`


export const ChangeQuantityButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  background: none;
  border: none;

  cursor: pointer;

  border-radius: 50%;
  padding: 4px;

  margin: 0 4px;

  transition: .2s;

  &:active {
    background: #0004;
  }
`

export const PlusIcon = styled(PlusIconSvg)`
  fill: #000;
  scale: .5;
`


export const MinusIcon = styled(MinusIconSvg)`
  fill: #000;
  scale: .5;
`

export const RemoveProductIcon = styled(DeleteIconSvg)`
  fill: #aaa;
`

export const ProductPrice = styled.span`
display: inline-block;
  font-weight: 600;
  font-size: 20px;

  margin-top: 12px;
`