import styled, {css} from 'styled-components'
import {ms} from 'src/utils'

export default styled.section`
  margin: ${ms(11)} 0;
  height: 100%;
  ${({dark}) =>
    dark &&
    css`
      background-color: ${({theme: {colors}}) => colors.third};
    `} ${({theme: {mq}}) => mq.desktop} {
  }
`
