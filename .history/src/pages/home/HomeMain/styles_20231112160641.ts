import { styled } from '@/styles'

export const HomeMainContainer = styled('main', {
  maxWidth: 1024,
  margin: '3rem auto',
  display: 'flex',
  justifyContent: 'space-between',
})
export const ContentContainer = styled('div', {
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '1rem',
  paddingRight: '1.5rem',
  h1: {
    fontSize: '3.5rem',
    color: '$gray900',
    fontFamily: 'Lobster, sans-serif;',
    fontWeight: '400',
  },
  p: {},
})
