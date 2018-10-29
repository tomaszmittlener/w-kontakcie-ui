import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ArrowIcon, Link} from 'src/components'
import {ms} from 'src/utils'

const LinksList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0 0 0 ${ms(5)};
`

const NavContainer = styled.nav`
  //border: 1px dotted black;
  display: flex;
`

const ArrowContainer = styled.figure`
  margin: 0 ${ms(-4)} 0 0;
  display: inline-block;
  svg {
    display: inline-block;
    height: ${ms(-2)};
    transform: rotate(-90deg);
  }
`
const LinkItem = styled.li`
  display: inline-flex;
  margin: 0 ${ms(0)} ${ms(0)} 0;

`

class PageNavigation extends Component {
  render() {
    const {linksData} = this.props
    return (
      <NavContainer>
        <LinksList>
          {linksData.map((link, index) => (
            <LinkItem key={`${link.to}-${index}`}>
              <ArrowContainer>
                <ArrowIcon />
              </ArrowContainer>
              <Link scroll to={link.to}>
                {link.name}
              </Link>
            </LinkItem>
          ))}
        </LinksList>
      </NavContainer>
    )
  }
}

PageNavigation.propTypes = {
  linksData: PropTypes.arrayOf(
    PropTypes.shape({to: PropTypes.string, name: PropTypes.string}),
  ).isRequired,
}

export default PageNavigation
