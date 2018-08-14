import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {contextPropTypesShape, withAppContext} from 'src/context'
import map from 'lodash/map'
import {ms} from '../../layouts/helpers'

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
  transition: all 0.4s;
  background: ${({theme: {colors}}) => colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
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

const Item = styled.li`
  font-size: ${ms(1)};
  border-top: 1px solid ${({theme}) => theme.colors.disabled};
`

const MainNavigationLink = styled.button`
  padding: ${ms(0)} 0 ${ms(0)} ${ms(2)};
  width: 100%;
  height: 100%;
`

class MobileMenu extends React.PureComponent {
  render() {
    const {
      className,
      context: {toggleMenuOpen, isMenuOpen},
    } = this.props
    return (
      <MenuContainer open={isMenuOpen} className={className}>
        <button onClick={toggleMenuOpen}>X</button>
        <MenuItems>
          {map([{}], (item, i) => (
            <Item key={i} onClick={toggleMenuOpen}>
              <MainNavigationLink to={item.slug}>
                {item.title}
              </MainNavigationLink>
            </Item>
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
