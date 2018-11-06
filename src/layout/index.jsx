import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  Provider as BreakpointsProvider,
  createBreakpoints,
} from 'react-match-breakpoints'
import {ThemeProvider} from 'styled-components'

import {locationPropTypesShape} from 'src/utils/PropTypes'
import {getLocalTitle, isWindowDefined} from 'src/utils'
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

const BREAKPOINTS =
  isWindowDefined &&
  createBreakpoints({
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
  // {
  //   name: 'msvalidate.01',
  //   content: CONFIG.bingSiteVerificationId,
  // },
]
const BreakPointsProviderFix = props =>
  isWindowDefined ? <BreakpointsProvider {...props} /> : <Fragment />

class Layout extends React.Component {
  render() {
    const {
      children,
      location: {pathname},
    } = this.props

    return (
      <ThemeProvider theme={THEME}>
        <BreakPointsProviderFix breakpoints={BREAKPOINTS}>
          <AppContextProvider>
            <div
              key={`head`}
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: '<meta name="msvalidate.01" content="A9947AA1BFA3D207E2553A0C1A38BEFE" />' }}
            />
            <AppHelmet
              description={CONFIG.siteDescription}
              title={`${CONFIG.siteTitle} |  ${getLocalTitle(pathname)}`}
              meta={APP_META}
            />
            <App>{children}</App>
          </AppContextProvider>
        </BreakPointsProviderFix>
      </ThemeProvider>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: locationPropTypesShape.isRequired,
}

export default Layout
