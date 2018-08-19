import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {contextPropTypesShape, withAppContext} from 'src/context'
import map from 'lodash/map'
import menuItelmsList from '../../../data/MenuItems'
import {ms} from '../../utils/index'

const MenuContainer = styled.nav`
  text-transform: uppercase;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  width: 200px;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({theme: {colors}}) => colors.primary};
  top: 0;
  right: 0;
  bottom: 0;
`

const MenuItems = styled.ul`
  list-style-type: none;
  padding: ${ms(8)} 0 0 0;
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
  transition: all 0.6ms linear;

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
        <MenuItems>
          {map(menuItelmsList, (item, i) => (
            <li key={`${item.link}-${i}`}>
              <MainNavigationLink
                aria-label={`go to "${item.title}" page`}
                exact
                activeClassName="active"
                to={item.link}
                onClick={toggleMenuOpen}>
                {item.title}
              </MainNavigationLink>
            </li>
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
