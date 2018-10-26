import React, {Fragment} from 'react'
import styled, {css} from 'styled-components'
import {compose, ms} from 'src/utils/index'
import {contextPropTypesShape, withAppContext} from 'src/context/index'
import {graphql, StaticQuery, Link} from 'gatsby'
import {MenuButton, Button} from 'src/components/index'
import LogoSVG from 'src/components/Logo/index'
import map from 'lodash/map'
import {isWindowDefined} from 'src/utils'
import menuItemsList from '../../../data/MenuItems'

const Content = styled.div`
  z-index: ${({theme: {layers}}) => layers.top};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  ${({theme}) => theme.mq.desktop} {
    justify-content: space-between;
  }

  transition: opacity 0.15s linear 0.1s;
  opacity: 1;

  ${({isFullyVisible, isOnTop}) =>
  !isFullyVisible &&
  !isOnTop &&
  css`
      opacity: 0;
    `};
`


const Container = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: ${ms(-2)} ${ms(2)};
  align-items: center;
  z-index: ${({theme: {layers}}) => layers.middleTom};
  transition: all 250ms ease-in-out;
  padding: ${ms(-2)} ${ms(2)};
  background-color: transparent;
  border: none;
  &:before {
    opacity: 1;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
    ${Content} {
      opacity: 1;
    }
  }

  &:before {
    transition: opacity 0.15s linear 0.1s;
    content: '';
    left: 0;
    opacity: 1;
    position: absolute;
    top: -${ms(3)};
    width: 100%;
    height: calc(100% + ${ms(3)});
    background-color: ${({theme: {colors}}) => colors.canvas};
    border-bottom: 0.0625rem solid #dbd9d2;
    z-index: 0;
  }

  ${({isFullyVisible}) =>
    !isFullyVisible &&
    css`
      &:before {
        opacity: 0;
      }
    `};

  ${({theme}) => theme.mq.desktop} {
    padding: ${ms(0)} ${ms(8)};
    ${({isOnTop}) =>
      isOnTop &&
      css`
        transform: translateY(${ms(3)});
      `};
  }
`

const Logo = styled(LogoSVG)`
  z-index: ${({theme: {layers}}) => layers.top};
  height: ${ms(4.3)};
`

const LogoContainer = styled(Link)`
  margin: 0;
  display: flex;
`

const MenuItems = styled.nav`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0 0 0 ${ms(5)};
`

const MainNavigationLink = styled(Link)`
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
      context: {toggleMenuOpen, isMobile, isTablet, isMenuOpen},
    } = this.props
    const isBelowStartingPoint = this.state.scrollPosition >= 50
    const isMobileView = isMobile || isTablet

    const isFullyVisible = () => {
      if (isMobileView && isBelowStartingPoint) {
        return true
      }
      if (!isBelowStartingPoint) {
        return false
      }
      if (this.state.scrollDirection === 'up' && isBelowStartingPoint) {
        return true
      }

      return false
    }

    return (
      <Container
        isMobile={isTablet || isMobile}
        isOnTop={!isBelowStartingPoint}
        isFullyVisible={isFullyVisible()}>
        <LogoContainer to="/" aria-label="got to Home page">
          <Logo />
        </LogoContainer>

        <Content
          isFullyVisible={isFullyVisible()}
          isOnTop={!isBelowStartingPoint}>
          {!isMobileView && (
            <Fragment>
              <MenuItems aria-hidden={isMobileView}>
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
              </MenuItems>
            </Fragment>
          )}
          <Button to="/contact">Kontakt</Button>
          {isMobileView && (
            <MenuButton onClick={toggleMenuOpen} isMenuOpen={isMenuOpen} />
          )}
        </Content>
      </Container>
    )
  }
}

Header.propTypes = {
  context: contextPropTypesShape.isRequired,
}

const HeaderToExport = compose(withAppContext)(Header)

export default props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        logo: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeaderToExport {...props} data={data} />}
  />
)