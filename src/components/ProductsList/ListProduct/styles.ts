import styled from "styled-components";

export const ListProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 240px;

  box-shadow: 0px 2px 3px rgba(0,0,0,.4);

  margin: 10px;
  padding: 20px 10px;

  border-radius: 10px;

  cursor: pointer;
`

export const ProductImage = styled.img`
  height: 140px;
  width: 140px;

  margin-bottom: 4px;
  object-fit: contain;
`

export const ProductTitle = styled.span`
display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: 600;
  font-size: 24px;
`

export const ProductPrice = styled.span`
  font-weight: 600;
  font-size: 18px;
`