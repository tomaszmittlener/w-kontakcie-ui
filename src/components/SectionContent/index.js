import styled, {css} from 'styled-components'
import {ms} from 'src/utils'

export default styled.section`
  margin: 0 auto;
  ${({theme}) => theme.mq.tablet} {
    width: 75%;
  }
`
