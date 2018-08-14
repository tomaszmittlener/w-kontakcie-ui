import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider, css} from 'styled-components'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {
  contextPropTypesShape,
  withAppContext,
  withAppContextProvider,
} from 'src/context'
import config from '../../data/SiteConfig'
import {getLocalTitle} from '../utils'
import './global-styles'
import AppHelmet from '../components/Helmet'
import MobileMenu from '../components/MobileMenu'

const ViewContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  transform: none;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease;
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
            <button onClick={toggleMenuOpen}>open menu</button>
            <Content
              isMenuOpen={isMenuOpen}
              onClick={() => isMenuOpen && toggleMenuOpen()}>
              {children}
            </Content>
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

export default withAppContextProvider(withAppContext(Layout))
