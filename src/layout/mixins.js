import {css} from 'styled-components'
import {ms} from 'src/utils'

export const StyledFirstLetter = css`
  p:first-of-type {
    padding: ${ms(4)} 0 0 0;
    margin: 0 0 ${ms(4)} 0;
    &:first-letter {
      float: left;
      margin-right: 10px;
      margin-left: -5px;
      margin-top: 5px;
      line-height: 0.73em;
      font-size: 5.5em;
      font-weight: 800;
      color: ${({theme: {colors}}) => colors.primary};
      font-family: ${({
        theme: {
          typo: {fontFamily},
        },
      }) => fontFamily.secondary};
    }
  }
`

export const MaxWidthText = css`
  max-width: 80ch;
  margin: 0 auto;
`
