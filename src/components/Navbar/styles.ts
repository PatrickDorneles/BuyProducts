import styled from "styled-components";
import { color } from "../../styles/colors";

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 70px;
  background: ${color.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.span`
  color: white;
  font-size: 1.7em;
`