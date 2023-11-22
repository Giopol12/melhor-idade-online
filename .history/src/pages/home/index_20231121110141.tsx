import { Header } from '@/components/Header'
import { Container } from './styles'
import { HomeMain } from './HomeMain'

import { OurMission } from '@/components/OurMission'
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
