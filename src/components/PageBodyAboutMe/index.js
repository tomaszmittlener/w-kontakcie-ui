import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {imageFluidPropTypesShape} from 'src/utils/PropTypes'
import Img from 'gatsby-image'
import {ms, compose} from 'src/utils'
import {H2, H3, ParagraphText} from 'src/components'
import {withLocales} from 'src/context/locales'
import map from 'lodash/map'
import {experience, competences} from '../../../data/TextLists'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1500px;
  margin: 0 auto;
  min-height: unset;
  padding: ${ms(2)};
  ${({theme: {mq}}) => mq.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding: ${ms(10)};
  }
`

const PhotoSection = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  ${({theme: {mq}}) => mq.tablet} {
    width: 35%;
    padding: 20px;
  }
`

const ExperienceSection = styled.article`
  display: flex;
  flex-direction: column;
  ${({theme: {mq}}) => mq.tablet} {
    width: 55%;
  }
`

const Avatar = styled(Img)`
  width: 200px;
  margin: 0 0 ${ms(6)} 0;
  border-radius: 100%;
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
              <ParagraphText>{t('owner.description.main')}</ParagraphText>
              <ParagraphText>{t('owner.description.accented')}</ParagraphText>
            </FigCaption>
          </Figure>
        </PhotoSection>
        <ExperienceSection>
          <H2>{t('articlesPage.competencesSection.title')}</H2>
          <ul>
            {map(competences[0].bullets, (competence, competenceIndex) => (
              <li key={`competence-${competenceIndex}`}>{competence}</li>
            ))}
          </ul>
          <H2>{t('articlesPage.experienceSection.title')}</H2>
          {map(experience, (exp, expIndex) => (
            <Fragment key={`therapy-${exp.title}-${expIndex}`}>
              {exp.title && <H3>{exp.title}</H3>}
              <ParagraphText>{exp.description}</ParagraphText>
              <ul>
                {map(exp.bullets, (bullet, bulletIndex) => (
                  <li key={`therapy-${exp.title}-${expIndex}-${bulletIndex}`}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </ExperienceSection>
      </Container>
    )
  }
}

AboutPageBody.propTypes = {
  meImage: imageFluidPropTypesShape.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(withLocales)(AboutPageBody)
