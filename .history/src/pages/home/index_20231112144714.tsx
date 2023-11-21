import { Header } from '@/components/Header'
import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Header />
      <HomeMain></HomeMain>
    </Container>
  )
}
