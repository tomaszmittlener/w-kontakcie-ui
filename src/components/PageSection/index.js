import styled, {css} from 'styled-components'
import {ms} from 'src/utils'

export default styled.section`
  padding: ${ms(8)} ${ms(2)};
  height: 100%;
  ${({dark}) =>
    dark &&
    css`
      background-color: ${({theme: {colors}}) => colors.third};
    `} ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(8)} 0;
    min-height: unset;
  }
`
