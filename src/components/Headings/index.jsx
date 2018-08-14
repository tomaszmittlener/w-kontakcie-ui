import styled from 'styled-components'
import { ms } from '../../layouts/helpers'

export const H1 = styled.h1`
  font-size: ${ms(4)}; // 36px
  text-transform: uppercase;
  margin: 0;
  color: ${({ color, theme: { colors } }) => (color ? colors[color] : 'inherit')};
  font-family: ${({theme: {typo: {fontFamily}}}) => fontFamily.secondary};
  font-weight: unset;
`

export const H2 = styled.h2`
  font-size: ${ms(3)}; //32px
  margin: 0;
  color: ${({ color, theme: { colors } }) => (color ? colors[color] : 'inherit')};
  font-family: ${({theme: {typo: {fontFamily}}}) => fontFamily.secondary};
  font-weight: unset;
`

export const H3 = styled.h3`
  font-family: ${({ theme: { typo: { fontFamily } } }) => fontFamily.primary};
  font-size: ${ms(2)}; //22px
  line-height: 1.5;
  margin: 0;
  color: ${({ color, theme: { colors } }) => (color ? colors[color] : 'inherit')};
  font-family: ${({theme: {typo: {fontFamily}}}) => fontFamily.primary};
  font-weight: unset;
`
