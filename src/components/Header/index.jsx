import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {compose} from 'src/utils'
import {contextPropTypesShape, withAppContext} from 'src/context'
import {withLocales} from 'src/context/locales'
import {graphql, StaticQuery, Link} from 'gatsby'
import {rgba} from 'polished'
import LogoSVG from 'src/components/Logo'
import {ms} from 'src/utils/index'
import map from 'lodash/map'
import menuItemsList from '../../../data/MenuItems'

const Container = styled.header`
  width: 100%;
  position: absolute;
  background-color: ${({theme: {colors}}) => rgba(colors.primary, 0)};
  display: flex;
  padding: ${ms(1)} ${ms(2)};
  align-items: center;
  z-index: ${({theme: {layers}}) => layers.middleTom};
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(1)} ${ms(-1)};
  }
`

const Logo = styled(LogoSVG)`
  width: ${ms(6)};
  height: ${ms(3.4)};
  ${({theme: {mq}}) => mq.desktop} {
    width: ${ms(7 * 1.2)};
    height: ${ms(6.3 * 1.2)};
  }
`

const LogoContainer = styled(Link)`
  margin: 0 auto;
  display: flex;
  transform: translateX(22px);
  ${({theme: {mq}}) => mq.desktop} {
    margin: 0;
  }
`

const MenuItems = styled.nav`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0 0 0 auto;
`

const MainNavigationLink = styled(Link)`
  text-transform: uppercase;
  padding: 0 ${ms(0)};
  font-size: ${ms(1)};
  color: ${({theme: {colors}}) => colors.text};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  text-decoration: none;
  display: block;
  text-align: center;
  opacity: 1;
  transition: all 300ms linear;
  font-weight: bold;

  &.active {
    opacity: 0.4;
  }
  &:hover {
    opacity: 0.7;
  }
`

class Header extends React.Component {
  render() {
    const {
      t,
      context: {toggleMenuOpen, isMobile, isTablet},
    } = this.props
    return (
      <Container isMobile={isTablet || isMobile}>
        <LogoContainer to="/" aria-label="got to Home page">
          <Logo withText={!(isTablet || isMobile)} />
        </LogoContainer>
        {!(isTablet || isMobile) && (
          <MenuItems aria-hidden={isTablet || isMobile}>
            {map(menuItemsList, (item, i) => (
              <MainNavigationLink
                key={`${item.link}-${i}`}
                aria-label={`go to "${item.title}" page`}
                exact
                activeClassName="active"
                to={item.link}
                onClick={toggleMenuOpen}>
                {item.title}
              </MainNavigationLink>
            ))}
          </MenuItems>
        )}
      </Container>
    )
  }
}

Header.propTypes = {
  context: contextPropTypesShape.isRequired,
  t: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  fixedHeader: PropTypes.bool,
}

const HeaderToExport = compose(
  withAppContext,
  withLocales,
)(Header)

export default props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        logo: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeaderToExport {...props} data={data} />}
  />
)
