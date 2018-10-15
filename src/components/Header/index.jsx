import React, {Fragment} from 'react'
import styled, {css} from 'styled-components'
import {compose} from 'src/utils'
import {contextPropTypesShape, withAppContext} from 'src/context'
import {graphql, StaticQuery, Link} from 'gatsby'
import {MenuButton, Button} from 'src/components'
import LogoSVG from 'src/components/Logo'
import {ms} from 'src/utils/index'
import map from 'lodash/map'
import menuItemsList from '../../../data/MenuItems'

const Container = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: ${ms(-2)} ${ms(2)};
  align-items: center;
  z-index: ${({theme: {layers}}) => layers.middleTom};
  transition: all 250ms ease-in-out;
  background-color: ${({theme: {colors}}) => colors.canvas};
  border-bottom: 0.0625rem solid #dbd9d2;
  padding: ${ms(-2)} ${ms(2)};
  ${({isOnTop}) =>
    isOnTop &&
    css`
      border-bottom: none;
      background-color: transparent;
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

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  ${({theme}) => theme.mq.desktop} {
    justify-content: space-between;
  }
`

const Logo = styled(LogoSVG)`
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
  font-size: ${ms(0)};
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
    scrollPosition: 0,
  }

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50
      if (this.state.scrollPosition !== newScrollHeight) {
        this.setState({scrollPosition: newScrollHeight})
      }
    }
  }

  render() {
    const {
      context: {toggleMenuOpen, isMobile, isTablet, isMenuOpen},
    } = this.props
    const opacity = 1 - Math.min(100 / this.state.scrollPosition, 1)
    const isOnTop = this.state.scrollPosition === 0
    const isMobileView = isMobile || isTablet

    return (
      <Container
        isMobile={isTablet || isMobile}
        isOnTop={isOnTop}
        opacity={Number(opacity.toFixed(1))}>
        <LogoContainer to="/" aria-label="got to Home page">
          <Logo />
        </LogoContainer>

        <Content>
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
