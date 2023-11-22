import { styled } from '@/styles'

export const AboutUsContainer = styled('div', {
  maxWidth: 1024,
  margin: '3rem auto',
  display: 'flex',
  justifyContent: 'space-between',
})
export const AboutUsContentContainer = styled('div', {
  flex: 1,
  display: 'flex',
  gap: '1.25rem',
  justifyContent: 'center',
  flexDirection: 'column',
  h1: {
    fontFamily: 'Roboto, sans-serif',
    color: '$blue200',
    fontWeight: 'bold',
  },
})
