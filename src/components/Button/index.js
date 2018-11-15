import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {lighten} from 'polished'

import {ms} from 'utils/index'

const StyledButton = styled(Link)`
  background-color: ${({theme: {colors}}) => colors.primary};
  box-shadow: inset 0 0 0 0.0625rem #${({theme: {colors}}) => colors.primary};
  color: ${({theme: {colors}}) => colors.canvas};
  text-decoration: none;
  padding: ${ms(0)} ${ms(2)};
  margin: 0;
  transition: all 0.15s linear;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  line-height: ${ms(0)};
  &:hover {
    color: ${({theme: {colors}}) => colors.canvas};
    background-color: ${({theme: {colors}}) => lighten(0.07, colors.primary)};
  }
`

const Button = ({className, children, to}) => (
  <StyledButton className={className} to={to}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  to: undefined,
}

export default Button
