import { styled } from '@/styles'

export const HomeMainContainer = styled('main', {
  maxWidth: 1024,
  margin: '3rem auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
export const ContentContainer = styled('div', {
  background: 'black',
  flex: 1,
  h1: {
    fontFamily: 'Lobster, sans-serif;',
    fontWeight: '400',
  },
})
