import React from 'react'
import styled from 'styled-components'
import {imageFluidPropTypesShape} from 'src/utils/PropTypes'
import Img from 'gatsby-image'
import {ms, compose} from 'src/utils'
import {H2, H3, ParagraphText} from 'src/components'
import {withLocales} from 'src/context/locales'

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

const DescriptionSection = styled.article`
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
              <ParagraphText>{t('aboutMe.description')}</ParagraphText>
            </FigCaption>
          </Figure>
        </PhotoSection>
        <DescriptionSection>
          <H2>Doświadczenie</H2>
          <ParagraphText>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>adipiscing elit, sed do eiusmod tempor incididunt</li>
              <li> Ut enim ad minim veniam, quis nostrud exercitation</li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </li>
            </ul>
          </ParagraphText>
          <H2>Prywatnie</H2>
          <ParagraphText> {t('aboutMe.description')}</ParagraphText>
        </DescriptionSection>
      </Container>
    )
  }
}

AboutPageBody.propTypes = {
  meImage: imageFluidPropTypesShape.isRequired,
}

export default compose(withLocales)(AboutPageBody)
