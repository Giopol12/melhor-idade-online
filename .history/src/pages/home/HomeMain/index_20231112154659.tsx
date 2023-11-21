import Image from 'next/image'
import { ContentContainer, HomeMainContainer } from './styles'

import mainImg from '../../../../assets/main-image.png'

export function HomeMain() {
  return (
    <HomeMainContainer>
      <ContentContainer>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          placeat nemo error, aperiam nihil nam architecto. Esse recusandae
          magnam quis veniam eveniet ex quae suscipit. Cum corrupti atque quam
          provident.
        </h1>
      </ContentContainer>
      <Image src={mainImg} width={450} alt="" />
    </HomeMainContainer>
  )
}
