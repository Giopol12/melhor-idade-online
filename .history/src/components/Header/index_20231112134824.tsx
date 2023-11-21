import Image from 'next/image'
import { HeaderContainer, NavContainer } from './styles'

import logo2 from '../../../assets/logo2.png'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo2} width={64} alt="logo" quality={100} />
      <NavContainer></NavContainer>
    </HeaderContainer>
  )
}
