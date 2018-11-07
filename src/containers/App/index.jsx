import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import withBreakpoints, {compose} from 'src/utils'
import styled, {css} from 'styled-components'
import {Element} from 'react-scroll'

import {breakpointsPropTypesShape} from 'src/utils/PropTypes'
import {Header, Footer, MobileMenu} from 'src/containers'
import {TOP_SECTION} from 'src/constants/SectionNames'
import {contextPropTypesShape, withAppContext} from 'src/context'
import 'src/layout/global-styles'
import background from '../../../static/constellation_background.png'

const ViewContainer = styled(({isMenuOpen, ...rest}) => <Element {...rest} />)`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme: {colors}}) => colors.canvas};
  transition: 0.25s transform ease-in-out;
  z-index: ${({theme: {layers}}) => layers.middle};
  position: relative;
  ${({isMenuOpen}) =>
    isMenuOpen &&
    css`
      transform: translateX(-300px);
    `};
`

const ContentContainer = styled.main`
  position: relative;
  background-color: ${({theme: {colors}}) => colors.canvas};
  z-index: ${({theme: {layers}}) => layers.middle};
  &:after {
    content: '';
    background-image: url(${background});
    background-size: 400px;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  &:before {
    content: '';
    visibility: ${({isMenuOpen}) => isMenuOpen ? 'visible' : 'hidden'};
    transition: 0.5s opacity ease-in-out;
    background-color: ${({theme: {colors}}) => colors.primary};
    opacity: ${({isMenuOpen}) => isMenuOpen ? '0.4' : '0'};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: ${({theme: {layers}}) => layers.top};
  }
`

class Layout extends React.Component {
  render() {
    const {
      children,
      context: {toggleMenuOpen, isMenuOpen},
      breakpoints: {isTablet, isMobile},
    } = this.props

    const isMobileView = isMobile || isTablet

    return (
      <Fragment>
        {isMobileView && <MobileMenu />}
        <Header />
        <ViewContainer
          name={TOP_SECTION}
          isMenuOpen={isMenuOpen}
          onClick={() => isMenuOpen && toggleMenuOpen()}>
          <Fragment>
            <ContentContainer isMenuOpen={isMenuOpen}>{children}</ContentContainer>
          </Fragment>
          <Footer />
        </ViewContainer>
      </Fragment>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  context: contextPropTypesShape.isRequired,
  breakpoints: breakpointsPropTypesShape.isRequired,
}

export default compose(
  withAppContext,
  withBreakpoints,
)(Layout)
