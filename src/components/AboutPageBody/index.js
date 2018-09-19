import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {imageFluidPropTypesShape} from 'src/utils/PropTypes'
import Img from 'gatsby-image'
import {ms, compose} from 'src/utils'
import {H2, H3, ParagraphText} from 'src/components'
import {withLocales} from 'src/context/locales'

const Container = styled.section`
  display: flex;
  background-color: ${({theme: {colors}}) => colors.third};
  height: 100%;
`

const PhotoSection = styled.aside`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  height: 100%;
  border-right: 1px solid ${({theme: {colors}}) => colors.primary};
`

const DescriptionSection = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
`

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
`

const FigCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NameText = styled(H2)`
  font-weight: bold;
  text-align: center;
  margin: 0 0 ${ms(-5)} 0;
`
const ProfessionText = styled(H3)`
  font-size: ${ms(0)};
  font-weight: bold;
`

class AboutPageBody extends React.Component {
  render() {
    const {meImage, t} = this.props
    return (
      <Container>
        <PhotoSection>
          <Figure>
            <Avatar
              title="avatar"
              alt="Anna Dejewska's circle shape photo"
              sizes={meImage.childImageSharp.fluid}
            />
            <FigCaption>
              <NameText>{t('owner.name')}</NameText>
              <ProfessionText>{t('owner.profession')}</ProfessionText>
              <ParagraphText>{t('aboutMe.description')}</ParagraphText>
            </FigCaption>
          </Figure>
        </PhotoSection>
        <DescriptionSection>
          KOMPETENCJE
        </DescriptionSection>
      </Container>
    )
  }
}

AboutPageBody.propTypes = {
  meImage: imageFluidPropTypesShape.isRequired,
}

export default compose(withLocales)(AboutPageBody)
