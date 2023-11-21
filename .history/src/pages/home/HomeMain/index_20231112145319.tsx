import Image from 'next/image'
import { HomeMainContainer } from './styles'

import mainImg from '../../../../assets/main-image.jpg'

export function HomeMain() {
  return (
    <HomeMainContainer>
      <Image src={mainImg} width={800} alt="" />
    </HomeMainContainer>
  )
}
