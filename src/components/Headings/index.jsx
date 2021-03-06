import styled from 'styled-components'
import {ms} from 'utils'

export const H1 = styled.h1`
  display: block;
  word-break: break-all;
  font-size: ${ms(7)};
  line-height: ${ms(7.5)};
  margin: 0 0 ${ms(2)} 0;
  color: ${({color, theme: {colors}}) => (color ? colors[color] : 'inherit')};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  ${({theme: {mq}}) => mq.tablet} {
    word-break: normal;
    font-size: ${ms(9)};
    line-height: ${ms(9.5)};
  }
`

export const H2 = styled.h2`
  display: block;
  font-size: ${ms(5)};
  line-height: ${ms(5.5)};
  margin: 0 0 ${ms(1)} 0;
  color: ${({color, theme: {colors}}) => (color ? colors[color] : 'inherit')};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};

  ${({theme: {mq}}) => mq.tablet} {
    margin: 0 0 ${ms(4)} 0;
    font-size: ${ms(6)};
    line-height: ${ms(6.5)};
  }
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

  ${({theme: {mq}}) => mq.tablet} {
    font-size: ${ms(3)};
    line-height: ${ms(3.5)};
    margin: 0 0 ${ms(0)} 0;
  }
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
  ${({theme: {mq}}) => mq.tablet} {
    font-size: ${ms(2)};
    line-height: ${ms(2.5)};
  }
`
