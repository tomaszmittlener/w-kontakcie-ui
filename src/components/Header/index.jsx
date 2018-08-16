import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {compose} from 'src/utils'
import {contextPropTypesShape, withAppContext} from 'src/context'
import {withLocales} from 'src/context/locales'
import {graphql, StaticQuery} from 'gatsby'
import {rgba} from 'polished'
import LogoSVG from 'src/components/Logo'
import {ms} from 'src/layout/helpers'

const MobileTheme = css`
  //min-height: 60px;
`

const DesktopTheme = css`
  min-height: 100px;
`

const Container = styled.nav`
  ${({isMobile}) => isMobile && MobileTheme};
  ${({isMobile}) => !isMobile && DesktopTheme};
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: ${({theme: {colors}}) => rgba(colors.primary, 0)};
  display: flex;
  //justify-content: space-between;
  padding: ${ms(1)} ${ms(0)};
  align-items: center;
  z-index: ${({theme: {layers}}) => layers.middleTom};
`

const Logo = styled(LogoSVG)`
  //width: 89px; //5.6
  //height: 51px; //2.9
  width: ${ms(6)}; //52
  height: ${ms(3.4)}; // 30
  margin: 0 auto;
`

const HamburgerButton = styled.button`
  border: 0;
  outline: none;
  width: 22px;
  height: 22px;
  border-top: 2px solid ${({theme: {colors}}) => rgba(colors.primary, 1)};
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
    border-top: 2px solid ${({theme: {colors}}) => rgba(colors.primary, 1)};
    transform: translateY(8px);
    transition: 300ms all linear;
  }
  &:after {
    transform: translateY(18px);
  }
  &:focus {
    transform: rotate(45deg) translateY(5px);
    border: none;
    &:after {
      transform: rotate(-90deg) translateX(-8px);
    }
  }
`

const Header = ({t, context: {toggleMenuOpen, isMobile, isTablet}, data}) => (
  <Container isMobile={isTablet || isMobile}>
    <Logo />
    <HamburgerButton onClick={toggleMenuOpen} />
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
