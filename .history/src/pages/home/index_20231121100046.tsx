import { Header } from '@/components/Header'
import { Container } from './styles'
import { HomeMain } from './HomeMain'
import Image from 'next/image'
import img from '@/../assets/img.jpg'
import { OurMission } from '@/components/OurMission'
export default function Home() {
  return (
    <Container>
      <Header />
      <HomeMain />
      <OurMission></OurMission>
    </Container>
  )
}
