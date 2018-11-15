import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import withBreakpoints, {compose} from 'utils'
import styled, {css} from 'styled-components'
import {Element} from 'react-scroll'

import {breakpointsPropTypesShape} from 'utils/PropTypes'
import {Header, Footer, MobileMenu} from 'containers'
import {TOP_SECTION} from 'constants/SectionNames'
import {contextPropTypesShape, withAppContext} from 'context'
import 'src/layout/global-styles'
import background from '../../../static/constellation_background.png'

const ViewContainer = styled(({isMenuOpen, showContent, ...rest}) => (
  <Element {...rest} />
))`
  opacity: ${({showContent}) => (showContent ? 1 : 0)};
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme: {colors}}) => colors.canvas};
  transition: 0.2s transform ease-in-out, 0.2s opacity ease-in-out;
  z-index: ${({theme: {layers}}) => layers.middle};
  position: relative;
  ${({isMenuOpen}) =>
    isMenuOpen &&
    css`
      transform: translateX(-300px);
    `};
`

const ContentContainer = styled.main`
  position: relative;
  background-color: ${({theme: {colors}}) => colors.canvas};
  z-index: ${({theme: {layers}}) => layers.middle};
  &:before {
    content: '';
    visibility: ${({isMenuOpen}) => (isMenuOpen ? 'visible' : 'hidden')};
    transition: 0.5s opacity ease-in-out;
    background-color: ${({theme: {colors}}) => colors.primary};
    opacity: ${({isMenuOpen}) => (isMenuOpen ? '0.4' : '0')};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: ${({theme: {layers}}) => layers.top};
  }
`

class Layout extends React.Component {
  state = {
    showContent: false,
  }

  componentDidMount() {
    this.mounted = true
    this.timeout = this.timer()
  }

  componentWillUnmount = () => {
    this.mounted = true
    clearTimeout(this.timeout)
  }

  timer = () =>
    setTimeout(() => {
      this.setState({showContent: true}) || null
    }, 300)

  render() {
    const {
      children,
      context: {toggleMenuOpen, isMenuOpen},
      breakpoints: {isTablet, isMobile},
    } = this.props
    const {showContent} = this.state
    const isMobileView = isMobile || isTablet

    return (
      <Fragment>
        {isMobileView && showContent && <MobileMenu />}
        <Header showHeader={showContent}/>
        <ViewContainer
          showContent={showContent}
          name={TOP_SECTION}
          isMenuOpen={isMenuOpen}
          onClick={() => isMenuOpen && toggleMenuOpen()}>
          <ContentContainer isMenuOpen={isMenuOpen}>
            {children}
            <Footer />
          </ContentContainer>
        </ViewContainer>
      </Fragment>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  context: contextPropTypesShape.isRequired,
  breakpoints: breakpointsPropTypesShape.isRequired,
}

export default compose(
  withAppContext,
  withBreakpoints,
)(Layout)
