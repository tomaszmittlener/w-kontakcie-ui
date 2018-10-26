import styled, {css} from 'styled-components'
import {ms} from 'src/utils'
import {lighten} from 'polished'

export default styled.section`
  padding: ${ms(11)} 0;
  height: 100%;
  ${({dark}) =>
    dark &&
    css`
      background-color: ${({theme: {colors}}) => lighten(0.2, colors.third)};
    `} ${({theme: {mq}}) => mq.desktop} {
  }
  ${({noPadding}) =>
    noPadding &&
    css`
      padding: 0;
    `};
`
