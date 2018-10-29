import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {Link as ScrollLink} from 'react-scroll'
import styled, {css} from 'styled-components'

import {textPropTypes, textDefaultProps} from '../../constants/PropTypes'

const LinkMixin = css`
  color: ${({theme: {colors}}) => colors.text};
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
  cursor: pointer;

  ${({noHoover}) =>
    !noHoover &&
    css`
      background: linear-gradient(
          to bottom,
          ${({theme: {colors}}) => colors.primary} 0%,
          ${({theme: {colors}}) => colors.primary} 100%
        )
        repeat-x 0 100%;
      background-size: 2px 2px;

      &:hover {
        background-size: 5px 100%;
        color: ${({theme: {colors}}) => colors.third};
      }
    `};
`

const scrollAnimation = {
  duration: 1500,
  smooth: 'easeInOutQuint',
}

const WrappedLink = styled(
  ({size, color, children, to, exact, scroll, ...otherProps}) => {
    const href = /(http|https|tel|mailto)(.+)/.exec(to)
    if (href) {
      return (
        <a href={href[0].replace(/\s/g, '')} target="_blank" {...otherProps}>
          {children}
        </a>
      )
    }
    if (scroll) {
      return (
        <ScrollLink to={to} {...scrollAnimation} {...otherProps}>
          {children}
        </ScrollLink>
      )
    }
    return (
      <Link to={to} exact={exact} {...otherProps}>
        {children}
      </Link>
    )
  },
)`
  ${LinkMixin};
`

function CusotmLink({className, size, color, children, to, scroll, noHoover}) {
  return (
    <WrappedLink
      size={size}
      color={color}
      className={className}
      to={to}
      scroll={scroll}
      noHoover={noHoover}>
      {children}
    </WrappedLink>
  )
}

CusotmLink.propTypes = {
  ...textPropTypes,
  to: PropTypes.string.isRequired,
  scroll: PropTypes.bool,
  noHoover: PropTypes.bool,
}

CusotmLink.defaultProps = {
  ...textDefaultProps,
  scroll: false,
  noHoover: false,
}

export default CusotmLink
