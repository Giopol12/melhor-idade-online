import { Header } from '@/components/Header'
import { Container } from './styles'
import { HomeMain } from './HomeMain'
import Image from 'next/image'
export default function Home() {
  return (
    <Container>
      <Header />
      <HomeMain />
      <Image />
    </Container>
  )
}
