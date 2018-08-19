import styled from 'styled-components'
import {ms} from '../../utils/index'

export const H1 = styled.h1`
  font-size: ${ms(4)}; // 36px
  line-height: ${ms(4)};
  text-transform: uppercase;
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
  font-size: ${ms(3)}; //32px
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
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
  font-size: ${ms(2)}; //22px
  line-height: ${ms(2)};
  margin: 0 0 ${ms(0)} 0;
  color: ${({color, theme: {colors}}) => (color ? colors[color] : 'inherit')};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
  font-weight: unset;
`
export const H4 = styled.h4`
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
  font-size: ${ms(1)}; //22px
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
