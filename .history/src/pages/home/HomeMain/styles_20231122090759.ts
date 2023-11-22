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
  p: {
    fontSize: '$lg',
    color: '$gray500',
  },
  button: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    alignItems: 'center',
    boxSizing: 'initial',
    fontWeight: 'bold',
    width: '9rem',
    fontSize: '$lg',
    background: '$green100',
    border: 0,
    borderRadius: '9999px',
    padding: '1rem 2rem',
    '&:hover': {
      filter: 'brightness(0.8)',
      cursor: 'pointer',
    },
    a: {
      textDecoration: 'none',
      color: '$gray900',
    },
  },
})
