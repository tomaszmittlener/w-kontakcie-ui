import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {compose} from 'src/utils'
import {contextPropTypesShape, withAppContext} from 'src/context'
import {withLocales} from 'src/context/locales'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {withStaticGraphQl} from 'src/utils/withStaticGrapgQl'

const MobileTheme = css``

const DesktopTheme = css``

const Container = styled.nav`
  ${({isMobile}) => isMobile && MobileTheme};
  ${({isMobile}) => !isMobile && DesktopTheme};
  width: 100vw;
`

const Logo = styled(Img)`
  max-height: 200px;
  width: 200px;
  height: 100%;
`


const Header = ({t, context: {toggleMenuOpen, isMobile, isTablet}, data}) => (
  <Container isMobile={isTablet || isMobile}>
    <Logo
      title="Logo"
      alt="Logo of a company"
      fluid={data.logo.childImageSharp.fluid}
    />
    <button onClick={toggleMenuOpen}>open menu</button>
    header
  </Container>
)

Header.propTypes = {
  context: contextPropTypesShape.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(
  withAppContext,
  withLocales,
  withStaticGraphQl({
    query: graphql`
      query HeaderQuery {
        logo: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  }),
)(Header)
