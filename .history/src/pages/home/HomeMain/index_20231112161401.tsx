import Image from 'next/image'
import { ContentContainer, HomeMainContainer } from './styles'

import mainImg from '../../../../assets/main-image.png'
import { ArrowUpRight } from '@phosphor-icons/react'

export function HomeMain() {
  return (
    <HomeMainContainer>
      <ContentContainer>
        <h1>Fazendo o bem sem olhar a quem</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          itaque rerum aliquid ipsam, corporis laudantium explicabo pariatur,
          fugiat libero atque repellendus ab mollitia obcaecati voluptate
          perferendis! Nostrum et consequatur unde!
        </p>
        <button>
          <span>SOBRE NOS</span>
          <ArrowUpRight size={32} />
        </button>
      </ContentContainer>
      <Image src={mainImg} width={450} alt="" />
    </HomeMainContainer>
  )
}
