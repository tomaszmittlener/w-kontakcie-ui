import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ms} from 'src/utils'

const Circle = styled.button`
  transition: 300ms right linear;
  outline: none;
  padding: 0;
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
`

const HamburgerButton = styled.div`
  top: 1px;
  left: 8px;
  border: 0;
  outline: none;
  width: 22px;
  height: 16px;
  border-top: 2px solid ${({theme: {colors}}) => colors.text};
  background: transparent;
  position: relative;
  transition: 300ms all linear;
  cursor: inherit;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 2px solid ${({theme: {colors}}) => colors.text};
    transform: translateY(5px);
    transition: 300ms all linear;
  }
  &:after {
    transform: translateY(12px);
  }
  ${({isMenuOpen}) =>
    isMenuOpen &&
    css`
      top: -1px;
      left: 10px;
      transform: rotate(45deg) translateY(0);
      border: none;
      &:after {
        transform: rotate(-90deg) translateX(-10px);
      }
      &:before {
        transform: translateY(10px);
      }
    `};
`

const MenuButton = ({isMenuOpen, onClick}) => (
  <Circle
    aria-label="open mobile menu button"
    aria-current={isMenuOpen}
    onClick={onClick}
    isMenuOpen={isMenuOpen}>
    <HamburgerButton isMenuOpen={isMenuOpen} />
  </Circle>
)

MenuButton.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuButton
