import { Header } from '@/components/Header'
import { Container } from './styles'
import { HomeMain } from './HomeMain'

import { OurMission } from '@/components/OurMission'
import { AboutUs } from '@/components/AboutUs'
export default function Home() {
  return (
    <Container>
      <Header />
      <HomeMain />
      <OurMission />
      <AboutUs />
    </Container>
  )
}
