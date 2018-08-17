import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {compose} from 'src/utils'
import {contextPropTypesShape, withAppContext} from 'src/context'
import {withLocales} from 'src/context/locales'
import {graphql, StaticQuery, Link} from 'gatsby'
import {H2, H3} from 'src/components/Headings'
import {ParagraphText} from 'src/components/Text'

import {rgba} from 'polished'
import {ms} from 'src/utils/index'
import Img from 'gatsby-image'
import menuItelmsList from '../../../data/MenuItems'

const ImageContainer = styled(Img)`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  margin: 0 0 ${ms(1)} 0;
  ${({theme: {mq}}) => mq.desktop} {
    margin: 0 ${ms(1)} 0 0;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme: {colors}}) => colors.canvas};
  padding: ${ms(2)};
  margin: 0 auto;
  max-width: 100ch;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    align-items: flex-start;
  }
`
const DescriptionContainer = styled.div`
  max-width: 100ch;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme: {colors}}) => colors.text};
  font-weight: lighter;
  ${({theme: {mq}}) => mq.desktop} {
    align-items: flex-start;
  }
`

const NameText = styled(H2)`
  font-weight: bold;
`
const ProfessionText = styled(H3)`
  font-size: ${ms(0)};
  font-weight: bold;
  padding: 0 0 ${ms(0)} 0;
`
const AboutMe = ({t, context: {toggleMenuOpen, isMobile, isTablet}, data}) => (
  <Container>
    <ImageContainer sizes={data.meImage.childImageSharp.fluid} />
    <DescriptionContainer>
      <NameText>Anna Dejewska</NameText>
      <ProfessionText>psycholog, terapeuta</ProfessionText>
      <ParagraphText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ParagraphText>
    </DescriptionContainer>
  </Container>
)

AboutMe.propTypes = {
  context: contextPropTypesShape.isRequired,
  t: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const HeaderToExport = compose(
  withAppContext,
  withLocales,
)(AboutMe)

export default props => (
  <StaticQuery
    query={graphql`
      query AboutMeQuery {
        meImage: file(relativePath: {eq: "me.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeaderToExport {...props} data={data} />}
  />
)
