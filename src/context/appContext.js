import React from 'react'
import theme from 'src/layout/theme'
import PropTypes from 'prop-types'
import {
  TABLET_MEDIA_QUERY,
  DESKTOP_L_MEDIA_QUERY,
  DESKTOP_L_MEDIA_QUERY_MIN_WIDTH,
  DESKTOP_MEDIA_QUERY,
  DESKTOP_MEDIA_QUERY_MIN_WIDTH,
  TABLET_MEDIA_QUERY_MIN_WIDTH,
} from 'src/constants/MediaQueries'
import {isWindowDefined} from 'src/utils'

export const AppContext = React.createContext()

export class AppContextProvider extends React.Component {
  state = {
    theme,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isDesktopL: false,
    viewport: '',
    isMenuOpen: false,
  }

  componentDidMount() {
    this.initializeMatchMedia()
  }

  setDeviceViewport = payload => {
    this.setState(prevState => ({
      isMobile: payload === 'mobile',
      isTablet: payload === 'tablet',
      isDesktop: payload === 'desktop',
      isDesktopL: payload === 'desktopL',
      viewport: payload,
      isMenuOpen: this.shouldCLoseMenu(prevState, payload),
    }))
  }

  mobileViewport =
    isWindowDefined &&
    window.matchMedia(
      `screen and (max-width: ${TABLET_MEDIA_QUERY_MIN_WIDTH - 1}px)`,
    )
  tabletViewport =
    isWindowDefined &&
    window.matchMedia(
      `screen and ${TABLET_MEDIA_QUERY} and (max-width: ${DESKTOP_MEDIA_QUERY_MIN_WIDTH -
        1}px)`,
    )
  desktopViewport =
    isWindowDefined &&
    window.matchMedia(
      `screen and ${DESKTOP_MEDIA_QUERY} and (max-width: ${DESKTOP_L_MEDIA_QUERY_MIN_WIDTH -
        1}px)`,
    )
  desktopLViewport =
    isWindowDefined && window.matchMedia(`screen and ${DESKTOP_L_MEDIA_QUERY}`)

  initializeMatchMedia = () => {
    if (this.mobileViewport.matches) {
      this.setDeviceViewport('mobile')
    } else if (this.tabletViewport.matches) {
      this.setDeviceViewport('tablet')
    } else if (this.desktopViewport.matches) {
      this.setDeviceViewport('desktop')
    } else if (this.desktopLViewport.matches) {
      this.setDeviceViewport('desktopL')
    }

    this.desktopLViewport.addListener(mq => {
      mq.matches && this.setDeviceViewport('desktopL')
    })

    this.desktopViewport.addListener(mq => {
      mq.matches && this.setDeviceViewport('desktop')
    })

    this.tabletViewport.addListener(mq => {
      mq.matches && this.setDeviceViewport('tablet')
    })

    this.mobileViewport.addListener(mq => {
      mq.matches && this.setDeviceViewport('mobile')
    })
  }

  shouldCLoseMenu = (prevState, payload) =>
    prevState.isMenuOpen && (payload === 'desktop' || payload === 'desktopL')
      ? false
      : prevState.isMenuOpen

  toggleMenuOpen = () => {
    const {isMobile, isTablet} = this.state
    if (isTablet || isMobile) {
      this.setState(prevState => ({isMenuOpen: !prevState.isMenuOpen}))
    }
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          toggleMenuOpen: this.toggleMenuOpen,
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.any,
}

AppContextProvider.defaultProps = {
  children: '',
}

export const contextPropTypesShape = PropTypes.shape({
  theme: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  isDesktopL: PropTypes.bool.isRequired,
  viewport: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
})

export function withAppContext(Component) {
  return function ThemedComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    )
  }
}

export function withAppContextProvider(Component) {
  return function ThemedComponent(props) {
    return (
      <AppContextProvider>
        <Component {...props} />
      </AppContextProvider>
    )
  }
}
