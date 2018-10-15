import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider, css} from 'styled-components'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {getLocalTitle, compose} from 'src/utils'
import {Helmet, MobileMenu, Header, Footer, Transition} from 'src/components'
import {
  contextPropTypesShape,
  withAppContext,
  withAppContextProvider,
} from 'src/context'
import config from '../../data/SiteConfig'
import './global-styles'

const ViewContainer = styled.div`
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
`

class Layout extends React.Component {
  render() {
    const {
      children,
      location: {pathname},
      context: {toggleMenuOpen, isMenuOpen, theme, isTablet, isMobile},
    } = this.props

    const isMobileView = isMobile || isTablet

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Helmet
            description={config.siteDescription}
            title={`${config.siteTitle} |  ${getLocalTitle(pathname)}`}
          />
          {isMobileView && <MobileMenu />}
          <Header />
          <ViewContainer
            isMenuOpen={isMenuOpen}
            onClick={() => isMenuOpen && toggleMenuOpen()}>
            <Transition>
              <ContentContainer>{children}</ContentContainer>
            </Transition>
            <Footer />
          </ViewContainer>
        </Fragment>
      </ThemeProvider>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: locationPropTypesShape.isRequired,
  context: contextPropTypesShape.isRequired,
}

export default compose(
  withAppContextProvider,
  withAppContext,
)(Layout)
