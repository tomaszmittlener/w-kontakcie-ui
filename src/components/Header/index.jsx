import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {compose} from 'src/utils'
import {contextPropTypesShape, withAppContext} from 'src/context'
import {graphql, StaticQuery, Link} from 'gatsby'
import {rgba} from 'polished'
import LogoSVG from 'src/components/Logo'
import {ms} from 'src/utils/index'
import map from 'lodash/map'
import menuItemsList from '../../../data/MenuItems'

const Container = styled.header`
  width: 100%;
  position: fixed;
  background: linear-gradient(
    to bottom,
    ${({theme: {colors}, opacity}) => rgba(colors.third, opacity)},
    ${({theme: {colors}, opacity}) => rgba(colors.canvas, opacity)}
  );
  display: flex;
  padding: ${ms(0)} ${ms(2)};
  align-items: center;
  z-index: ${({theme: {layers}}) => layers.middleTom};
  padding: ${ms(-1)} ${ms(-1)};
`

const Logo = styled(LogoSVG)`
  height: ${ms(4.3)};
`

const LogoContainer = styled(Link)`
  margin: 0;
  display: flex;
  transform: translateX(22px);
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
  state = {
    scrollPosition: 0,
  }

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50
      if (this.state.scrollPosition !== newScrollHeight) {
        this.setState({scrollPosition: newScrollHeight})
      }
    }
  }

  render() {
    const {
      context: {toggleMenuOpen, isMobile, isTablet},
    } = this.props
    const opacity = 1 - Math.min(100 / this.state.scrollPosition, 1)
    return (
      <Container
        isMobile={isTablet || isMobile}
        opacity={Number(opacity.toFixed(1))}>
        <LogoContainer to="/" aria-label="got to Home page">
          <Logo />
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
  hideLogo: PropTypes.bool,
}

Header.defaultProps = {
  hideLogo: false,
}

const HeaderToExport = compose(withAppContext)(Header)

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
