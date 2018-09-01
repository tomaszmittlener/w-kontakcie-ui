import styled from 'styled-components'
import {H1} from 'src/components/index'
import {ms} from 'src/utils'
import {rgba} from 'polished'

const PageMainTitle = styled(H1)`
  position: absolute;
  font-weight: bold;
  padding: ${ms(0)};
  background-color: ${({theme: {colors}}) => rgba(colors.canvas, 0.4)};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  font-size: ${ms(7)};
  line-height: 100%;
  margin: 0;
  ${({theme: {mq}}) => mq.tablet} {
  font-size: ${ms(8)};
  } 

  ${({theme: {mq}}) => mq.desktop} {
    font-size: ${ms(10)};
  }

}
`

export default PageMainTitle
