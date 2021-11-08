import { useTitle } from "../../store/title/hook";
import { CartIcon } from "../CartIcon";
import { NavbarContainer, Title } from "./styles";
export function Navbar() {
  const { title } = useTitle()


  return (
    <NavbarContainer>
      <Title>{title}</Title>
      <CartIcon />
    </NavbarContainer>
  )
}