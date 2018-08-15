import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {compose} from 'src/utils'
import {contextPropTypesShape, withAppContext} from 'src/context'
import {withLocales} from 'src/context/locales'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {rgba} from 'polished'
import LogoSVG from 'src/components/Logo'

const MobileTheme = css`
  min-height: 60px;
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
  background-color: ${({theme: {colors}}) => rgba(colors.canvas, 1)};
  display: flex;
  justify-content: space-between;
`

const Logo = styled(LogoSVG)`
  max-height: 400px;
  width: 400px;
  height: 100%;
`

const HamburgerButton = styled.button`
  border: 0;
  outline: none;
  width: 40px;
  height: 40px;
  border-top: 5px solid ${({theme: {colors}}) => rgba(colors.primary, 1)};
  background: transparent;
  position: relative;
  transition: 300ms transform linear;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 5px solid ${({theme: {colors}}) => rgba(colors.primary, 1)};
    transform: translateY(10px);
    transition: 300ms transform linear;
  }
  &:after {
    transform: translateY(25px);
  }
  &:focus {
    transform: rotate(45deg) translateY(5px);
    border: none;
    &:after {
      transform: rotate(-90deg) translateX(-10px);
    }
  }
`

const Header = ({
  t,
  context: {toggleMenuOpen, isMobile, isTablet},
  data
}) => {
  return (
    <Container isMobile={isTablet || isMobile}>
      <Logo />
      <HamburgerButton onClick={toggleMenuOpen} />
    </Container>
  )
}

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
