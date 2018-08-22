import styled from 'styled-components'
import {ms} from 'src/utils'

export default styled.section`
  padding: ${ms(8)} ${ms(2)};
  min-height: 50vh;
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(8)} 0;
    min-height: unset;
    height: 475px;
  }
`
