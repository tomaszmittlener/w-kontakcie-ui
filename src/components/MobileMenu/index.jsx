import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'
import {contextPropTypesShape, withAppContext} from 'src/context'
import map from 'lodash/map'
import menuItelmsList from '../../../data/MenuItems'
import {ms} from '../../layout/helpers'

const MenuContainer = styled.nav`
  position: fixed;
  z-index: 1000;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  width: 200px;
  left: calc(100vw + 200px);
  top: 0;
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 0.5s ease-in-out;
  background: ${({theme: {colors}}) => colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({open}) =>
    open &&
    css`
      left: 100vw;
      overflow: scroll;
      position: absolute;
      transition: transform 0.5s ease, -webkit-transform 0.5s ease;
      width: 200px;
      z-index: 30;
    `};
`

const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const MainNavigationLink = styled(Link)`
  padding: ${ms(0)};
  font-size: ${ms(1)};
  color: ${({theme: {colors}}) => colors.canvas};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  text-decoration: none;
  display: block;
  text-align: center;
  opacity: 1;
  transition: 0.6ms all linear;

  &.active {
    opacity: 0.4;
  }
  &:hover {
    opacity: 0.7;
  }
`

class MobileMenu extends React.PureComponent {
  render() {
    const {
      className,
      context: {toggleMenuOpen, isMenuOpen},
    } = this.props
    return (
      <MenuContainer open={isMenuOpen} className={className}>
        <MenuItems>
          {map(menuItelmsList, (item, i) => (
            <MainNavigationLink
              activeClassName="active"
              key={i}
              to={item.link}
              onClick={toggleMenuOpen}>
              {item.title}
            </MainNavigationLink>
          ))}
        </MenuItems>
      </MenuContainer>
    )
  }
}

MobileMenu.propTypes = {
  className: PropTypes.string,
  context: contextPropTypesShape.isRequired,
}

MobileMenu.defaultProps = {
  className: '',
}

export default withAppContext(MobileMenu)
