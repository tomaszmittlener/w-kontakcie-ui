import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {textPropTypes, textDefaultProps} from '../../../constants/PropTypes'
import {ms} from '../../../utils/index'
import TextBasicMixin from './TextBasicMixin'

const StyledText = styled.p`
  ${TextBasicMixin};
  margin: ${({nomargin, smallmargin}) =>
    nomargin ? 0 : (smallmargin && `0 0 ${ms(-2)}`) || `0 0 ${ms(3)}`}};
`

function ParagraphText({
  className,
  color,
  size,
  children,
  nopadding,
  smallmargin,
  weight,
}) {
  return (
    <StyledText
      color={color}
      size={size}
      nopadding={nopadding}
      smallmargin={smallmargin}
      weight={weight}
      className={className}>
      {children}
    </StyledText>
  )
}

ParagraphText.propTypes = {
  ...textPropTypes,
  nopadding: PropTypes.bool.isRequired,
  smallmargin: PropTypes.bool.isRequired,
}

ParagraphText.defaultProps = {
  ...textDefaultProps,
  nopadding: false,
  smallmargin: false,
}

export default ParagraphText
