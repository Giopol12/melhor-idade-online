import Image from 'next/image'
import { ContentContainer, HomeMainContainer } from './styles'

import mainImg from '../../../../assets/main-image.png'

export function HomeMain() {
  return (
    <HomeMainContainer>
      <ContentContainer>
        <h1>Fazendo o bem sem olhar a quem</h1>
      </ContentContainer>
      <Image src={mainImg} width={400} alt="" />
    </HomeMainContainer>
  )
}
