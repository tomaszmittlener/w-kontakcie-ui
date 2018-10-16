import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styled, {css} from 'styled-components'

import {textPropTypes, textDefaultProps} from '../../constants/PropTypes'

const LinkMixin = css`
  background: linear-gradient(
      to bottom,
      ${({theme: {colors}}) => colors.primary} 0%,
      ${({theme: {colors}}) => colors.primary} 100%
    )
    repeat-x 0 100%;
  background-size: 2px 2px;
  color: ${({theme: {colors}}) => colors.text};
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;

  &:hover {
    background-size: 2px 50px;
    color: ${({theme: {colors}}) => colors.third};
  }
`

const WrappedLink = styled(
  ({size, color, children, to, exact, ...otherProps}) => {
    const href = /(http|https|tel|mailto)(.+)/.exec(to)
    return href ? (
      <a href={href[0]} target="_blank" {...otherProps}>
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
