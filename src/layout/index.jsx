import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider, css} from 'styled-components'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {getLocalTitle, compose} from 'src/utils'
import AppHelmet from 'src/components/Helmet'
import MobileMenu from 'src/components/MobileMenu'
import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import {
  contextPropTypesShape,
  withAppContext,
  withAppContextProvider,
} from 'src/context'
import {withLocalesContextProvider} from 'src/context/locales'
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
        z-index: 1;
        height: 100%;
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
      context: {toggleMenuOpen, isMenuOpen, theme},
    } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <AppHelmet
            description={config.siteDescription}
            title={`${config.siteTitle} |  ${getLocalTitle(pathname)}`}
          />
          <ViewContainer
            isMenuOpen={isMenuOpen}
            onClick={() => isMenuOpen && toggleMenuOpen()}>
            <Header />
            <div>{children}</div>
            <Footer />
            <MobileMenu />
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
  withLocalesContextProvider,
  withAppContext,
)(Layout)
