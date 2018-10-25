import {css} from 'styled-components'

const TextBasicMixin = css`
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
  
  color: ${({color, theme: {colors}}) => (color ? colors[color] : 'inherit')};
  font-weight: ${({
    weight,
    theme: {
      typo: {weights},
    },
  }) => (weight ? weights[weight] : 'normal')};
  padding: 0;
`

export default TextBasicMixin
