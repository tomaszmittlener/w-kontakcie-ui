import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {withBreakpoints} from 'react-match-breakpoints'
import styled, {css} from 'styled-components'
import {Element} from 'react-scroll'

import {compose} from 'src/utils'
import {breakpointsPropTypesShape} from 'src/utils/PropTypes'
import {Transition} from 'src/components'
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
  transition: 0.5s transform linear;
  z-index: ${({theme: {layers}}) => layers.middle};
  position: relative;
  ${({isMenuOpen}) =>
    isMenuOpen &&
    css`
      transform: translateX(-200px);
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
          <Transition>
            <ContentContainer>{children}</ContentContainer>
          </Transition>
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
