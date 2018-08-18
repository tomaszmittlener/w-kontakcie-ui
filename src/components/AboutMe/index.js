import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {compose} from 'src/utils'
import {withLocales} from 'src/context/locales'
import {graphql, StaticQuery} from 'gatsby'
import {H2, H3} from 'src/components/Headings'
import {ParagraphText} from 'src/components/Text'
import {ms} from 'src/utils/index'
import Img from 'gatsby-image'
import { ImageFluidPropTypesShape, localesPropTypesShape } from 'src/utils/PropTypes';

const Avatar = styled(Img)`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  margin: 0 0 ${ms(1)} 0;
  ${({theme: {mq}}) => mq.desktop} {
    margin: 0 ${ms(1)} 0 0;
  }
`
const Container = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${ms(2)};
  margin: 0 auto;
  max-width: 100ch;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    align-items: flex-start;
  }
`
const DescriptionContainer = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const AboutMe = ({t, data}) => (
  <Container>
    <Avatar sizes={data.meImage.childImageSharp.fluid} />
    <DescriptionContainer>
      <NameText>{t('owner.name')}</NameText>
      <ProfessionText>{t('owner.profession')}</ProfessionText>
      <ParagraphText>
        {t('aboutMe.description')}
      </ParagraphText>
    </DescriptionContainer>
  </Container>
)

AboutMe.propTypes = {
  data: PropTypes.shape({
    meImage: ImageFluidPropTypesShape.isRequired,
  }).isRequired,
  ...localesPropTypesShape,
}

const HeaderToExport = compose(withLocales)(AboutMe)

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
