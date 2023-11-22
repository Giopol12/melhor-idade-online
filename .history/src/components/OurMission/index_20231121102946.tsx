import {
  OurMissionContainer,
  OurMissionContentContainer,
  OurMissionTitleAndDescriptionContainer,
} from './styles'
import Image from 'next/image'
import img from '@/../assets/img.jpg'

export function OurMission() {
  return (
    <OurMissionContainer>
      <OurMissionContentContainer>
        <OurMissionTitleAndDescriptionContainer>
          <h1>A nossa missão é fazer a diferença!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            excepturi pariatur nesciunt atque labore vero accusantium sapiente
            veritatis? Aperiam quae consectetur omnis reiciendis officia
          </p>
        </OurMissionTitleAndDescriptionContainer>
        <Image src={img} he />
      </OurMissionContentContainer>
    </OurMissionContainer>
  )
}
