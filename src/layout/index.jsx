import React from 'react'
import PropTypes from 'prop-types'
import {
  Provider as BreakpointsProvider,
  createBreakpoints,
} from 'react-match-breakpoints'
import {ThemeProvider} from 'styled-components'

import {locationPropTypesShape} from 'src/utils/PropTypes'
import {getLocalTitle} from 'src/utils'
import {AppContextProvider} from 'src/context'
import {App} from 'src/containers'
import {AppHelmet} from 'src/components'
import {
  TABLET_MEDIA_QUERY_MIN_WIDTH,
  TABLET_MEDIA_QUERY,
  DESKTOP_L_MEDIA_QUERY,
  DESKTOP_L_MEDIA_QUERY_MIN_WIDTH,
  DESKTOP_MEDIA_QUERY,
  DESKTOP_MEDIA_QUERY_MIN_WIDTH,
} from 'src/constants/MediaQueries'
import THEME from 'src/layout/theme'
import CONFIG from '../../data/SiteConfig'
import './global-styles'

const BREAKPOINTS = createBreakpoints({
  isMobile: `screen and (max-width: ${TABLET_MEDIA_QUERY_MIN_WIDTH - 1}px)`,
  isTablet: `screen and ${TABLET_MEDIA_QUERY} and (max-width: ${DESKTOP_MEDIA_QUERY_MIN_WIDTH -
    1}px)`,
  isDesktop: `screen and ${DESKTOP_MEDIA_QUERY} and (max-width: ${DESKTOP_L_MEDIA_QUERY_MIN_WIDTH -
    1}px)`,
  isDesktopL: `screen and ${DESKTOP_L_MEDIA_QUERY}`,
})

const APP_META = [
  {
    name: 'google-site-verification',
    content: CONFIG.googleSiteVerificationId,
  },
]

class Layout extends React.Component {
  render() {
    const {
      children,
      location: {pathname},
    } = this.props

    return (
      <ThemeProvider theme={THEME}>
        <BreakpointsProvider breakpoints={BREAKPOINTS}>
          <AppContextProvider>
            <AppHelmet
              description={CONFIG.siteDescription}
              title={`${CONFIG.siteTitle} |  ${getLocalTitle(pathname)}`}
              meta={APP_META}
            />
            <App>{children}</App>
          </AppContextProvider>
        </BreakpointsProvider>
      </ThemeProvider>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: locationPropTypesShape.isRequired,
}

export default Layout
