import Image from 'next/image'
import { HeaderContainer, LogoContainer, NavContainer } from './styles'

import logo2 from '../../../assets/logo2.png'
import Link from 'next/link'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer href="/">
        <Image src={logo2} width={64} alt="logo" quality={100} />
        <strong>melhor idade</strong>
      </LogoContainer>

      <NavContainer>
        <Link href={'#about-us'}>Sobre nós</Link>
        <Link href="/">Alimentação</Link>
        <Link href="/">Saúde</Link>
        <Link href="/">Lazer</Link>
      </NavContainer>
    </HeaderContainer>
  )
}
