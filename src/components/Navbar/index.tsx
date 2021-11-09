import { useRouter } from "next/dist/client/router";
import { useTitle } from "../../store/title/hook";
import { CartIcon } from "../CartIcon";
import { BackButton, NavbarContainer, StyledBackButtonSvg, Title } from "./styles";

type Props = {
  back?: boolean
  cart?: boolean
}

export function Navbar({ back, cart }: Props) {
  const router = useRouter()
  const { title } = useTitle()

  function goBackToProductsList() {
    router.push('/')
  }

  return (
    <NavbarContainer>
      { back ? (
        <BackButton onClick={goBackToProductsList} >
          <StyledBackButtonSvg />
        </BackButton>
      ) : '' }
      <Title>{title}</Title>
      {
        cart ?
        <CartIcon />
        : ''
      }
    </NavbarContainer>
  )
}