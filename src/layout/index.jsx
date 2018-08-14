import React, {Fragment} from 'react'
import styled, {ThemeProvider, css} from 'styled-components'
import config from '../../data/SiteConfig'
import {getLocalTitle} from '../utils'
import './global-styles'
import theme from './theme'
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

export default class MainLayout extends React.Component {
  state = {
    isMenuOpen: false,
  }

  toggleMenu = () =>
    this.setState(prevState => ({isMenuOpen: !prevState.isMenuOpen}))

  render() {
    const {
      children,
      location: {pathname},
    } = this.props
    const {isMenuOpen} = this.state
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <AppHelmet
            description={config.siteDescription}
            title={`${config.siteTitle} |  ${getLocalTitle(pathname)}`}
          />
          <ViewContainer isMenuOpen={isMenuOpen}>
            <button onClick={this.toggleMenu}>open menu</button>
            {children}
            <MobileMenu
              isMenuOpen={isMenuOpen}
              toggleMenu={this.toggleMenu}
              navigationLinks={[{}]}
            />
          </ViewContainer>
        </Fragment>
      </ThemeProvider>
    )
  }
}
