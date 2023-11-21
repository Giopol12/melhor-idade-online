import { styled } from '@/styles'

export const HomeMainContainer = styled('main', {
  maxWidth: 1024,
  margin: '3rem auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
export const ContentContainer = styled('div', {
  flex: 1,
  paddingRight: '1.5rem',
  h1: {
    fontSize: '4rem',
    fontFamily: 'Lobster, sans-serif;',
    fontWeight: '400',
  },
})
