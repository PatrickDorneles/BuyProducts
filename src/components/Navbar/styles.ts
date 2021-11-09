import styled from "styled-components";
import BackButtonSvg from '../../assets/svg/back.svg'
import { color } from "../../styles/colors";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  background: ${color.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.span`
  color: white;
  font-size: 1.5em;
  max-width: 40%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const BackButton = styled.button`
display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 15px;
  
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


export const StyledBackButtonSvg = styled(BackButtonSvg)`
  fill: white;
`