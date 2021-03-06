import React, {Fragment} from 'react'
import styled, {css} from 'styled-components'
import {Link as GatsbyLInk} from 'gatsby'

import withBreakpoints, {isWindowDefined, compose, ms} from 'utils/index'
import {contextPropTypesShape, withAppContext} from 'context/index'
import {MenuButton, Button, Link, ArrowIcon} from 'components'
import LogoSVG from 'components/Logo/index'
import {TOP_SECTION} from 'constants/SectionNames'
import {breakpointsPropTypesShape} from 'utils/PropTypes'
import menuItemsList from 'constants/MenuItems'

const Content = styled.div`
  z-index: ${({theme: {layers}}) => layers.top};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  ${({theme}) => theme.mq.desktop} {
    justify-content: space-between;
  }

  transition: opacity 0.2s linear 0.1s;
  opacity: 0;

  ${({showNav}) =>
    showNav &&
    css`
      opacity: 1;
    `};
`

const Container = styled.header`
  opacity: ${({showHeader}) => (showHeader ? 1 : 0)};
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: ${ms(-2)} ${ms(2)};
  align-items: center;
  z-index: ${({theme: {layers}}) => layers.middleTom};
  transition: opacity 900ms ease-in-out, padding 300ms linear;
  padding: ${ms(-2)} ${ms(2)};
  background-color: transparent;
  border: none;
  &:before {
    transition: opacity 0.2s linear 0.1s;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    top: -${ms(3)};
    width: 100%;
    height: calc(100% + ${ms(3)});
    background-color: ${({theme: {colors}}) => colors.canvas};
    border-bottom: 0.0625rem solid #dbd9d2;
    z-index: 0;
  }

  ${({showBG}) =>
    showBG &&
    css`
      &:before {
        opacity: 1;
      }
    `};

  &:hover {
    &:before {
      opacity: ${({hideBGonHoover}) => (hideBGonHoover ? 0 : 1)};
    }
    ${Content} {
      opacity: 1;
    }
  }

  ${({theme}) => theme.mq.desktop} {
    padding: ${ms(0)} ${ms(8)};
    ${({isOnTop}) =>
      isOnTop &&
      css`
        padding: ${ms(6)} ${ms(8)};
      `};
  }
`

const Logo = styled(LogoSVG)`
  z-index: ${({theme: {layers}}) => layers.top};
  height: ${ms(4.3)};
`

const LogoContainer = styled(GatsbyLInk)`
  margin: 0;
  display: flex;
`

const MenuItems = styled.nav`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0 0 0 ${ms(5)};
`

const MainNavigationLink = styled(GatsbyLInk)`
  padding: 0 ${ms(5)} 0 0;
  &:last-of-type {
    padding: 0;
  }
  color: ${({theme: {colors}}) => colors.text};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
  text-decoration: none;
  display: block;
  text-align: center;
  opacity: 1;
  transition: all 300ms linear;

  &.active {
    opacity: 0.4;
  }
  &:hover {
    opacity: 0.7;
  }
`

const UpButton = styled(Link)`
  opacity: ${({isVisible}) => (isVisible ? '1' : '0')};
  transition: opacity 0.15s linear 0.1s;
  position: fixed;
  z-index: ${({theme: {layers}}) => layers.top};
  bottom: ${ms(3)};
  right: ${ms(3)};
  transform: rotate(180deg);
  background-color: ${({theme: {colors}}) => colors.canvas};
  height: ${ms(7)};
  width: ${ms(7)};
  border-radius: 100%;
  box-shadow: 1px -3px 41px -13px ${({theme: {colors}}) => colors.text};
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

class Header extends React.Component {
  state = {
    scrollDirection: 'up',
    scrollPosition: 0,
  }

  componentDidMount() {
    if (isWindowDefined) {
      window.onscroll = () => {
        const previousPosition = this.state.scrollPosition
        const currentPosition = window.scrollY
        if (previousPosition > currentPosition) {
          this.setState({
            scrollDirection: 'up',
            scrollPosition: currentPosition,
          })
        } else {
          this.setState({
            scrollDirection: 'down',
            scrollPosition: currentPosition,
          })
        }
      }
    }
  }

  render() {
    const {
      context: {toggleMenuOpen, isMenuOpen},
      breakpoints: {isTablet, isMobile},
      showHeader,
    } = this.props

    const isMobileView = isMobile || isTablet
    const isScrollingUp = this.state.scrollDirection === 'up'
    const isOnTop = this.state.scrollPosition <= 50

    let showBG = true
    let showNav = true
    let hideBGonHoover = false

    if (isMobileView) {
      showBG = isMenuOpen ? false : !isOnTop
      showNav = true
      hideBGonHoover = isMenuOpen
    } else {
      showBG = isOnTop ? false : isScrollingUp
      showNav = isScrollingUp || isOnTop
      hideBGonHoover = isOnTop
    }

    return (
      <Fragment>
        <Container
          showHeader={showHeader}
          showBG={showBG}
          isOnTop={isOnTop}
          hideBGonHoover={hideBGonHoover}>
          <LogoContainer to="/" aria-label="got to Home page">
            <Logo />
          </LogoContainer>
          <Content showNav={showNav}>
            {!isMobileView && (
              <Fragment>
                <MenuItems aria-hidden={isMobileView}>
                  {menuItemsList.map((item, i) => (
                    <MainNavigationLink
                      key={`${item.link}-${i}`}
                      aria-label={`go to "${item.title}" page`}
                      activeClassName="active"
                      to={item.link}
                      onClick={toggleMenuOpen}>
                      {item.title}
                    </MainNavigationLink>
                  ))}
                </MenuItems>
              </Fragment>
            )}
            <Button to="/contact/">Kontakt</Button>
            {isMobileView && (
              <MenuButton onClick={toggleMenuOpen} isMenuOpen={isMenuOpen} />
            )}
          </Content>
        </Container>
        <UpButton scroll to={TOP_SECTION} isVisible={!isOnTop} noHoover>
          <ArrowIcon />
        </UpButton>
      </Fragment>
    )
  }
}

Header.propTypes = {
  context: contextPropTypesShape.isRequired,
  breakpoints: breakpointsPropTypesShape.isRequired,
}

export default compose(
  withAppContext,
  withBreakpoints,
)(Header)
