import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {contextPropTypesShape, withAppContext} from 'src/context/index'
import map from 'lodash/map'
import {ms} from 'src/utils/index'
import menuItemsList from '../../../data/MenuItems'

const MenuContainer = styled.nav`
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  width: 200px;
  display: block;
  background: ${({theme: {colors}}) => colors.primary};
  top: 0;
  right: 0;
  bottom: 0;
  padding: ${ms(8)} 0 0 0;
  margin: 0;
`

const MainNavigationLink = styled(Link)`
  padding: ${ms(0)};
  font-size: ${ms(0)};
  color: ${({theme: {colors}}) => colors.canvas};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
  text-decoration: none;
  display: block;
  text-align: center;
  opacity: 1;
  transition: all 0.3s ease-in-out;

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
      <MenuContainer
        aria-expanded={isMenuOpen}
        open={isMenuOpen}
        className={className}>
        {map(menuItemsList, (item, i) => (
          <MainNavigationLink
            key={`${item.link}-${i}`}
            aria-label={`go to "${item.title}" page`}
            exact
            activeClassName="active"
            to={item.link}
            onClick={toggleMenuOpen}>
            {item.title}
          </MainNavigationLink>
        ))}
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
