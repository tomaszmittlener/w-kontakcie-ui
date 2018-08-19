import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider, css} from 'styled-components'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {getLocalTitle, compose, ms} from 'src/utils'
import {
  Helmet,
  MobileMenu,
  Header,
  Footer,
  Transition,
  MenuButton,
} from 'src/components'
import {
  contextPropTypesShape,
  withAppContext,
  withAppContextProvider,
  withLocalesContextProvider,
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
  ${({withTopPadding}) =>
    withTopPadding &&
    css`
      padding: ${ms(8)} 0 0 0;
      ${({theme: {mq}}) => mq.desktop} {
        padding: ${ms(9.5)} 0 0 0;
      }
    `};
`

class Layout extends React.Component {
  toggleMenu = () =>
    this.setState(prevState => ({isMenuOpen: !prevState.isMenuOpen}))

  render() {
    const {
      children,
      location: {pathname},
      context: {toggleMenuOpen, isMenuOpen, theme, isTablet, isMobile},
      withTopPadding,
    } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Helmet
            description={config.siteDescription}
            title={`${config.siteTitle} |  ${getLocalTitle(pathname)}`}
          />
          <MenuButton
            onClick={toggleMenuOpen}
            isMenuOpen={isMenuOpen}
            shouldDisplay={isTablet || isMobile}
          />
          <MobileMenu />
          <ViewContainer
            isMenuOpen={isMenuOpen}
            onClick={() => isMenuOpen && toggleMenuOpen()}>
            <Header />
            <Transition>
              <ContentContainer withTopPadding={withTopPadding}>
                {children}
              </ContentContainer>
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
  withTopPadding: PropTypes.bool,
}

Layout.defaultProps = {
  withTopPadding: false,
}

export default compose(
  withAppContextProvider,
  withLocalesContextProvider,
  withAppContext,
)(Layout)
