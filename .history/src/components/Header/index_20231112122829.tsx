import Image from 'next/image'
import { HeaderContainer } from './styles'

import logo from '../../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} width={64} />
    </HeaderContainer>
  )
}
