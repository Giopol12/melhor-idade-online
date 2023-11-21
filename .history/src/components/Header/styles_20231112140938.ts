import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  maxWidth: 1024,
  margin: '2rem auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
export const LogoContainer = styled('div', {font-family: 'Edu TAS Beginner', cursive;})
export const NavContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  a: {
    textDecoration: 'none',
    color: '$beije500',
    fontSize: '$lg',
    borderBottom: '3px solid transparent',
    '&:hover': {
      borderBottom: '3px solid $beije500',
    },
  },
})
