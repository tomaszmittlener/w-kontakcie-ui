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
  transition: all 0.5s ease-in-out;
  position: relative;
  ${({isMenuOpen}) =>
    isMenuOpen &&
    css`
      position: fixed;
      min-height: unset;
      height: 100%;
      transform: translate3d(-200px, 0, 0);
    `};
`

const Content = styled.div`
  ${({isMenuOpen}) => isMenuOpen && 'cursor: e-resize;'};
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
          <ViewContainer isMenuOpen={isMenuOpen}>
            <Header />
            <Content
              isMenuOpen={isMenuOpen}
              onClick={() => isMenuOpen && toggleMenuOpen()}>
              {children}
            </Content>
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
