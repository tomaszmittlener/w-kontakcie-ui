import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider, css} from 'styled-components'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {getLocalTitle, compose} from 'src/utils'
import {AppHelmet, Transition} from 'src/components'
import {Header, Footer, MobileMenu} from 'src/containers'
import {Element} from 'react-scroll'
import {TOP_SECTION} from 'src/constants/SectionNames'
import {
  contextPropTypesShape,
  withAppContext,
  withAppContextProvider,
} from 'src/context'
import config from '../../data/SiteConfig'
import './global-styles'
import background from '../../static/constellation_background.png'

const ViewContainer = styled(Element)`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme: {colors}}) => colors.canvas};
  transition: 0.5s transform linear;
  z-index: ${({theme: {layers}}) => layers.middle};
  position: relative;
  ${({isMenuOpen}) =>
    isMenuOpen &&
    css`
      transform: translateX(-200px);
    `};
`

const ContentContainer = styled.main`
  position: relative;
  background-color: ${({theme: {colors}}) => colors.canvas};
  z-index: ${({theme: {layers}}) => layers.middle};
  &:after {
    content: '';
    background-image: url(${background});
    background-size: 400px;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`

class Layout extends React.Component {
  render() {
    const {
      children,
      location: {pathname},
      context: {toggleMenuOpen, isMenuOpen, theme, isTablet, isMobile},
    } = this.props

    const isMobileView = isMobile || isTablet

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <AppHelmet
            description={config.siteDescription}
            title={`${config.siteTitle} |  ${getLocalTitle(pathname)}`}
            meta={[
              {
                name: 'google-site-verification',
                content: config.googleSiteVerificationId,
              },
            ]}
          />
          {isMobileView && <MobileMenu />}
          <Header />
          <ViewContainer
            name={TOP_SECTION}
            isMenuOpen={isMenuOpen}
            onClick={() => isMenuOpen && toggleMenuOpen()}>
            <Transition>
              <ContentContainer>{children}</ContentContainer>
            </Transition>
            <Footer />
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
  withAppContext,
)(Layout)
