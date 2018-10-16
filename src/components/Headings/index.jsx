import styled from 'styled-components'
import {ms} from '../../utils/index'

export const H1 = styled.h1`
  display: block;
  font-size: ${ms(9)};
  line-height: ${ms(9.5)};
  margin: 0 0 ${ms(2)} 0;
  color: ${({color, theme: {colors}}) => (color ? colors[color] : 'inherit')};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  font-weight: unset;
`

export const H2 = styled.h2`
  display: block;
  font-size: ${ms(6)};
  line-height: ${ms(6.5)};
  margin: 0 0 ${ms(1)} 0;
  color: ${({color, theme: {colors}}) => (color ? colors[color] : 'inherit')};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  font-weight: unset;
`

export const H3 = styled.h3`
  display: block;
  font-size: ${ms(3)};
  line-height: ${ms(3.5)};
  margin: 0 0 ${ms(0)} 0;
  color: ${({color, theme: {colors}}) => (color ? colors[color] : 'inherit')};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  font-weight: unset;
`
export const H4 = styled.h4`
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  font-size: ${ms(1)};
  line-height: ${ms(1.5)};
  margin: 0 0 ${ms(0)} 0;
  color: ${({color, theme: {colors}}) => (color ? colors[color] : 'inherit')};
  font-weight: unset;
`
