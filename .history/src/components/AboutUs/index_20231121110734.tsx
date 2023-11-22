import { AboutUsContainer, AboutUsContentContainer } from './styles'

import Image from 'next/image'
import youngPeople from '@/../assets/young-people.png'
export function AboutUs() {
  return (
    <AboutUsContainer>
      <Image src={youngPeople} width={500} alt="" />
      <AboutUsContentContainer>
        <h1>Sobre Nós</h1>
      </AboutUsContentContainer>
    </AboutUsContainer>
  )
}
