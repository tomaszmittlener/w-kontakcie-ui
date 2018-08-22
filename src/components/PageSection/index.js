import styled from 'styled-components'
import {ms} from 'src/utils'

export default styled.section`
  padding: ${ms(8)} 0;
  background-color: ${({theme: {colors}}) => colors.canvas};
`
