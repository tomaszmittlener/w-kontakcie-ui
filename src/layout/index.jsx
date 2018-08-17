import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider, css} from 'styled-components'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {getLocalTitle, compose, ms} from 'src/utils'
import {Helmet, MobileMenu, Header, Footer, Transition} from 'src/components'
import {
  contextPropTypesShape,
  withAppContext,
  withAppContextProvider,
  withLocalesContextProvider,
} from 'src/context'
import config from '../../data/SiteConfig'
import './global-styles'

const ViewContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: none;
  transition: transform 0.5s ease-in-out;
  position: relative;
  z-index: ${({theme: {layers}}) => layers.middle};
  ${({isMenuOpen}) =>
    isMenuOpen &&
    css`
      position: fixed;
      min-height: unset;
      height: 100%;
      transform: translate3d(-200px, 0, 0);
      &:before {
        cursor: e-resize;
        pointer-events: auto;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: ${({theme: {layers}}) => layers.top};
        height: 100%;
      }
    `};
`

const ContentContainer = styled.div`
  flex: 1;
  background-color: ${({theme: {colors}}) => colors.canvas};
  z-index: ${({theme: {layers}}) => layers.middle};
  ${({withTopPadding}) =>
    withTopPadding &&
    css`
      padding: ${ms(8)} 0 0 0;
    `};
`

class Layout extends React.Component {
  toggleMenu = () =>
    this.setState(prevState => ({isMenuOpen: !prevState.isMenuOpen}))

  render() {
    const {
      children,
      location: {pathname},
      context: {toggleMenuOpen, isMenuOpen, theme},
      withTopPadding,
    } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Helmet
            description={config.siteDescription}
            title={`${config.siteTitle} |  ${getLocalTitle(pathname)}`}
          />
          <ViewContainer
            isMenuOpen={isMenuOpen}
            onClick={() => isMenuOpen && toggleMenuOpen()}>
            <Header />
            <ContentContainer withTopPadding={withTopPadding}>
              <Transition>{children}</Transition>
            </ContentContainer>
            <Footer />
          </ViewContainer>
          <MobileMenu />
        </Fragment>
      </ThemeProvider>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: locationPropTypesShape.isRequired,
  context: contextPropTypesShape.isRequired,
  withTopPadding: contextPropTypesShape,
}

Layout.defaultProps = {
  withTopPadding: false,
}

export default compose(
  withAppContextProvider,
  withLocalesContextProvider,
  withAppContext,
)(Layout)
