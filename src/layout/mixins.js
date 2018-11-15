import {css} from 'styled-components'
import {ms} from 'utils'

export const StyledFirstLetter = css`
  p:first-of-type {
    margin: 0 0 ${ms(4)} 0;
    &:first-letter {
      float: left;
      margin-right: 10px;
      margin-left: -5px;
      margin-top: 8px;
      line-height: 0.73em;
      font-size: 4.5rem;
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