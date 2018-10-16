import styled from 'styled-components'

export default styled.div`
  margin: 0 auto;
  ${({theme}) => theme.mq.tablet} {
    width: 75%;
  }
`
