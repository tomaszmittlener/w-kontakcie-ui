import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  Provider as BreakpointsProvider,
  createBreakpoints,
} from 'react-match-breakpoints'
import {ThemeProvider} from 'styled-components'
import Helmet from 'react-helmet'

import {locationPropTypesShape} from 'src/utils/PropTypes'
import {getLocalTitle, getSiteDescription, isWindowDefined} from 'src/utils'
import {AppContextProvider} from 'src/context'
import {App} from 'src/containers'
import { AppHelmet, SEO } from 'src/components';
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
import GlobalStyles from './global-styles'

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
        <Fragment>
        <GlobalStyles />
        <BreakPointsProviderFix breakpoints={BREAKPOINTS}>
          <AppContextProvider>
            <AppHelmet
              description={getSiteDescription(pathname)}
              title={`${CONFIG.siteTitleShort} |  ${getLocalTitle(pathname)}`}
              currentPath={pathname}
            />
            <App>{children}</App>
          </AppContextProvider>
        </BreakPointsProviderFix>
          </Fragment>
      </ThemeProvider>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: locationPropTypesShape.isRequired,
}

export default Layout
