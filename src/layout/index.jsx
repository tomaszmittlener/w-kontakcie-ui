import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  Provider as BreakpointsProvider,
  createBreakpoints,
} from 'react-match-breakpoints'
import {ThemeProvider} from 'styled-components'

import {locationPropTypesShape} from 'utils/PropTypes'
import {isWindowDefined} from 'utils'
import {AppContextProvider} from 'context'
import {App} from 'containers'
import {AppHelmet} from 'components'
import {
  TABLET_MEDIA_QUERY_MIN_WIDTH,
  TABLET_MEDIA_QUERY,
  DESKTOP_L_MEDIA_QUERY,
  DESKTOP_L_MEDIA_QUERY_MIN_WIDTH,
  DESKTOP_MEDIA_QUERY,
  DESKTOP_MEDIA_QUERY_MIN_WIDTH,
} from 'constants/MediaQueries'
import THEME from 'layout/theme'
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
      <Fragment>
        <ThemeProvider theme={THEME}>
          <Fragment>
            <GlobalStyles />
            <BreakPointsProviderFix breakpoints={BREAKPOINTS}>
              <AppContextProvider>
                <AppHelmet pathname={pathname} />
                <App>{children}</App>
              </AppContextProvider>
            </BreakPointsProviderFix>
          </Fragment>
        </ThemeProvider>
      </Fragment>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: locationPropTypesShape.isRequired,
}

export default Layout
