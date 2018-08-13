import React from 'react'
import styled from 'styled-components'

import { textPropTypes, textDefaultProps } from '../../../constants/PropTypes'
import TextBasixMixin from './TextBasicMixin'

const StyledText = styled.span`
  ${TextBasixMixin};
`

function SpanText({ className, color, size, children }) {
  return (
    <StyledText color={color} size={size} className={className}>
      {children}
    </StyledText>
  )
}

SpanText.propTypes = {
  ...textPropTypes,
}

SpanText.defaultProps = {
  ...textDefaultProps,
}

export default SpanText
