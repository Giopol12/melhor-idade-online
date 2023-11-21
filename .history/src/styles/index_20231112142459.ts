import { createStitches } from '@stitches/react'
export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      beije100: '#FFFBF4',
      beije500: '#CE8755',
      gray700: '#21201F',
      gray900: '#010101',
      green100: '#CDE693',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
