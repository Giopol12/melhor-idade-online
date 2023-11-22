import { AboutUsContainer, AboutUsContentContainer } from './styles'

import Image from 'next/image'
import youngPeople from '@/../assets/young-people.png'
export function AboutUs() {
  return (
    <AboutUsContainer id="about-us">
      <Image src={youngPeople} width={500} alt="" />
      <AboutUsContentContainer>
        <h1>Sobre Nós</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iusto
          perferendis aliquam sequi eum quae facere dolorum quod, iure
          temporibus facilis earum in nihil ea delectus nisi iste qui
          necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Itaque iusto perferendis aliquam sequi eum quae facere dolorum
          quod, iure temporibus facilis earum in nihil ea delectus nisi iste qui
          necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Itaque iusto perferendis aliquam sequi eum quae facere dolorum
          quod, iure temporibus facilis earum in nihil ea delectus nisi iste qui
          necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Itaque iusto perferendis aliquam sequi eum quae facere dolorum
          quod, iure temporibus facilis earum in nihil ea delectus nisi iste qui
          necessitatibus!
        </p>
      </AboutUsContentContainer>
    </AboutUsContainer>
  )
}
