import styled from 'styled-components'
import {ms} from '../../utils/index'

export const H1 = styled.h1`
  display: block;
  font-size: ${ms(10)};
  line-height: ${ms(10)};
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
  font-size: ${ms(3)};
  line-height: ${ms(3)};
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
  font-size: ${ms(2)};
  line-height: ${ms(2)};
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
  line-height: ${ms(1)};
  margin: 0 0 ${ms(0)} 0;
  color: ${({color, theme: {colors}}) => (color ? colors[color] : 'inherit')};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
  font-weight: unset;
`
