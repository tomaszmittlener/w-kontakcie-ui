import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styled, {css} from 'styled-components'

import {textPropTypes, textDefaultProps} from '../../constants/PropTypes'

const LinkMixin = css`
  text-decoration: none;
  color: ${({color, theme: {colors}}) => (color ? colors[color] : colors.text)};
  font-size: ${({size}) => size || 'inherit'};
  transition: color 300ms linear;
  &:hover {
    color: ${({color, theme: {colors}}) =>
      color ? colors[color] : colors.primary};
  }
`

const WrappedLink = styled(
  ({size, color, children, to, exact, ...otherProps}) => {
    const href = /(http|https)(.+)/.exec(to)
    return href ? (
      <a href={href[0]} {...otherProps}>
        {children}
      </a>
    ) : (
      <Link to={to} exact={exact} {...otherProps}>
        {children}
      </Link>
    )
  },
)`
  ${LinkMixin};
`

function CusotmLink({className, size, color, children, to}) {
  return (
    <WrappedLink size={size} color={color} className={className} to={to}>
      {children}
    </WrappedLink>
  )
}

CusotmLink.propTypes = {
  ...textPropTypes,
  to: PropTypes.string.isRequired,
}

CusotmLink.defaultProps = {
  ...textDefaultProps,
}

export default CusotmLink
