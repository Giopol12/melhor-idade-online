import Image from 'next/image'
import { ContentContainer, HomeMainContainer } from './styles'

import mainImg from '../../../../assets/main-image.png'

export function HomeMain() {
  return (
    <HomeMainContainer>
      <ContentContainer></ContentContainer>
      <Image src={mainImg} width={450} alt="" />
    </HomeMainContainer>
  )
}
