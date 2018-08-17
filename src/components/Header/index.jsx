import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {compose} from 'src/utils'
import {contextPropTypesShape, withAppContext} from 'src/context'
import {withLocales} from 'src/context/locales'
import {graphql, StaticQuery, Link} from 'gatsby'
import {rgba} from 'polished'
import LogoSVG from 'src/components/Logo'
import {ms} from 'src/utils/index'
import map from 'lodash/map'
import menuItelmsList from '../../../data/MenuItems'

const MobileTheme = css`
  //min-height: 60px;
`

const DesktopTheme = css`
  //min-height: 100px;
`

const Container = styled.nav`
  ${({isMobile}) => isMobile && MobileTheme};
  ${({isMobile}) => !isMobile && DesktopTheme};
  width: 100vw;
  position: absolute;
  top: 0;
  background-color: ${({theme: {colors}}) =>
    rgba(colors.primary, 0)}; // color is off
  display: flex;
  //justify-content: space-between;
  padding: ${ms(1)} ${ms(2)};
  align-items: center;
  z-index: ${({theme: {layers}}) => layers.middleTom};
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(1)} 0;
  }
`

const Logo = styled(LogoSVG)`
  //width: 89px; //5.6
  //height: 51px; //2.9
  width: ${ms(6)}; //52
  height: ${ms(3.4)}; // 30
  ${({theme: {mq}}) => mq.desktop} {
    width: ${ms(7)}; //52
    height: ${ms(6.3)}; // 30
  }
`

const LogoContainer = styled(Link)`
  margin: 0 auto;
  display: flex;
  transform: translateX(22px);
  ${({theme: {mq}}) => mq.desktop} {
    margin: 0;
  }
`

const HamburgerButton = styled.button`
  border: 0;
  outline: none;
  width: 22px;
  height: 16px;
  border-top: 2px solid ${({theme: {colors}}) => colors.text};
  background: transparent;
  position: relative;
  transition: 300ms all linear;
  cursor: pointer;
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

const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0 0 0 auto;
`

const MainNavigationLink = styled(Link)`
  text-transform: uppercase;
  padding: 0 ${ms(0)};
  font-size: ${ms(1)};
  color: ${({theme: {colors}}) => colors.text};
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
  font-weight: bold;

  &.active {
    opacity: 0.4;
  }
  &:hover {
    opacity: 0.7;
  }
`

const Header = ({
  t,
  context: {toggleMenuOpen, isMobile, isTablet, isMenuOpen},
  data,
}) => (
  <Container isMobile={isTablet || isMobile}>
    <LogoContainer to="/">
      <Logo withText={!(isTablet || isMobile)} />
    </LogoContainer>
    {(isTablet || isMobile) && (
      <HamburgerButton onClick={toggleMenuOpen} isMenuOpen={isMenuOpen} />
    )}
    {!(isTablet || isMobile) && (
      <MenuItems>
        {map(menuItelmsList, (item, i) => (
          <MainNavigationLink
            exact
            activeClassName="active"
            key={i}
            to={item.link}
            onClick={toggleMenuOpen}>
            {item.title}
          </MainNavigationLink>
        ))}
      </MenuItems>
    )}
  </Container>
)

Header.propTypes = {
  context: contextPropTypesShape.isRequired,
  t: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const HeaderToExport = compose(
  withAppContext,
  withLocales,
)(Header)

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
