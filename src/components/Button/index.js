import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'src/components'
import {ms} from 'src/utils/index'

const StyledButton = styled(Link)`
  background-color: ${({theme: {colors}}) => colors.secondary};
  box-shadow: inset 0 0 0 0.0625rem #${({theme: {colors}}) => colors.secondary};
  color: ${({theme: {colors}}) => colors.canvas};
  padding: ${ms(-1)} ${ms(2)};
  margin: 0 ${ms(0)};
  transition: all 0.15s linear;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  line-height: ${ms(0)};
  &:hover {
    color: ${({theme: {colors}}) => colors.canvas};
    background-color: ${({theme: {colors}}) => colors.primary};
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
