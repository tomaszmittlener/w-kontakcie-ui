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
import {
  ImageFluidPropTypesShape,
  localesPropTypesShape,
} from 'src/utils/PropTypes'

const Avatar = styled(Img)`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  margin: 0 0 ${ms(1)} 0;
  ${({theme: {mq}}) => mq.desktop} {
    margin: 0 ${ms(1)} 0 0;
  }
`

const Figure = styled.figure`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    align-items: flex-start;
  }
`

const FigCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80ch;
  ${({theme: {mq}}) => mq.desktop} {
    align-items: flex-start;
  }
`

const NameText = styled(H2)`
  font-weight: bold;
  margin: 0 0 ${ms(-5)} 0;
`
const ProfessionText = styled(H3)`
  font-size: ${ms(0)};
  font-weight: bold;
`

const AboutMe = ({t, meImage}) => (
  <Figure>
    <Avatar
      title="avatar"
      alt="Anna Dejewska's circle shape photo"
      sizes={meImage.childImageSharp.fluid} />
    <FigCaption>
      <NameText>{t('owner.name')}</NameText>
      <ProfessionText>{t('owner.profession')}</ProfessionText>
      <ParagraphText>{t('aboutMe.description')}</ParagraphText>
    </FigCaption>
  </Figure>
)

AboutMe.propTypes = {
  meImage: ImageFluidPropTypesShape.isRequired,
  ...localesPropTypesShape,
}

export default compose(withLocales)(AboutMe)