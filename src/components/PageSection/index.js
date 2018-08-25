import styled from 'styled-components'
import {ms} from 'src/utils'

export default styled.section`
  padding: ${ms(8)} ${ms(2)};
  height: 100%;
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(8)} 0;
    min-height: unset;
  }
`
