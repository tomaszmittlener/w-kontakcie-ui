import styled from 'styled-components'
import rgba from 'polished/lib/color/rgba'

import {H2} from 'components'
import {ms} from 'utils'

export default styled(H2)`
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  width: 100%;
  color: ${({theme: {colors}}) => rgba(colors.text, 0.7)};
  margin: 0 0 ${ms(8)} 0;
  &:after,
  &:before {
    content: '';
    border-top: 1px solid ${({theme: {colors}}) => rgba(colors.text, 0.3)};
    width: 40px;
    transform: translateY(-10px);
    display: inline-block;
    margin: 0 5px;
  }
`
