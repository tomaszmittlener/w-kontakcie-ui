import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styled from 'styled-components'

import { textPropTypes, textDefaultProps } from '../../constants/PropTypes'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ color, theme: { colors } }) => (color ? colors[color] : colors.text)};
  font-size: ${({ size }) => size || 'inherit'};
  transition: color 300ms linear;
  &:hover {
    color: ${({ color, theme: { colors } }) => (color ? colors[color] : colors.primary)};
  }
`

function SpanText({ className, size, color, children, to }) {
  return (
    <StyledLink size={size} color={color} className={className} to={to}>
      {children}
    </StyledLink>
  )
}

SpanText.propTypes = {
  ...textPropTypes,
  to: PropTypes.string.isRequired,
}

SpanText.defaultProps = {
  ...textDefaultProps,
}

export default SpanText
