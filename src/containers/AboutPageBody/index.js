import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'utils'
import Img from 'gatsby-image'
import {
  H2,
  H4,
  PageSection,
  ParagraphText,
  SectionLayout,
  SectionContent,
  AccordeonTable,
} from 'components'
import {withLocales} from 'context/locales'
import {StyledFirstLetter} from 'layout/mixins'
import {
  ABOUT_COMPETENCES_SECTION,
  ABOUT_EXPERIENCE_SECTION,
  ABOUT_ME_SECTION,
} from 'constants/SectionNames'
import {experience, competences} from 'constants/TextLists'

const SectionTitle = styled(H2)`
  text-align: left;
`

const ItemsContainer = styled.div`
  padding: ${ms(4)} 0 0 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${ms(9)} 0;
  width: 100%;
  align-items: center;
  &:last-of-type {
    margin: 0;
  }
  ${({theme: {mq}}) => mq.tablet} {
    margin: 0 0 ${ms(6)} 0;
    flex-direction: row;
    &:last-of-type {
      margin: 0;
    }
  }
`

const ItemFigure = styled.figure`
  margin: 0 0 ${ms(3)} 0;
  ${({theme: {mq}}) => mq.tablet} {
    margin: 0 ${ms(7)} 0 0;
  }
`

const ItemTitle = styled(props => <ParagraphText weight="bold" {...props} />)`
  margin: 0;
  display: block;
  font-size: ms(0.5);
  ${({theme: {mq}}) => mq.tablet} {
    flex: 6;
  }
`

const Avatar = styled(Img)`
  width: 250px;
  height: 100%;
`
const NameText = styled(H2)`
  font-weight: bold;
  //text-align: center;
  margin: ${ms(0)} 0 ${ms(0)} 0;
  text-align: center;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
  }
`
const ParagraphSectionContent = styled.article`
  ${StyledFirstLetter};

  ${({theme: {mq}}) => mq.desktop} {
    margin: 0 0 0 ${ms(10)};
  }
`
const ProfessionText = styled(H4)`
  font-size: ${ms(1)};
  text-align: center;
  font-weight: bold;

  margin: 0 0 ${ms(5)} 0;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
  }
`

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
  }
`

class AboutPageBody extends React.Component {
  render() {
    const {t, meImage} = this.props
    return (
      <Fragment>
        <PageSection topPadding name={ABOUT_ME_SECTION}>
          <SectionLayout>
            <SectionContent>
              <Container>
                <ImageSection>
                  <Avatar
                    outerWrapperClassName="gatsbyImageWrapper"
                    title="avatar"
                    alt="zdjęcie Anny Dejewskiej"
                    sizes={meImage.childImageSharp.fluid}
                  />
                </ImageSection>

                <ParagraphSectionContent>
                  <NameText>{t('owner.name')}</NameText>
                  <ProfessionText>{t('owner.profession')}</ProfessionText>
                  <ParagraphText size={ms(0.5)}>
                    {t('owner.description.main')}
                  </ParagraphText>
                  <ParagraphText size={ms(0.5)} weight="bold">
                    {t('owner.description.accented')}
                  </ParagraphText>
                </ParagraphSectionContent>
              </Container>
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection topPadding name={ABOUT_COMPETENCES_SECTION}>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('articlesPage.competencesSection.title')}
              </SectionTitle>
              <ItemsContainer>
                {competences.map((competence, competenceIndex) => (
                  <Item key={`${competence}-${competenceIndex}`}>
                    <ItemFigure>{competence.img}</ItemFigure>
                    <ItemTitle>{competence.title}</ItemTitle>
                  </Item>
                ))}
              </ItemsContainer>
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection topPadding finalSectionPadding name={ABOUT_EXPERIENCE_SECTION}>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('articlesPage.experienceSection.title')}
              </SectionTitle>
              <ParagraphText size={ms(0.5)}>
                Od 10 lat zajmuję się pracą indywidualną i grupową z osobami o
                różnym spectrum problemów i wyzwań. Początkowo jako trener i
                coach a następnie psychoterapeuta miałam okazję współpracować z
                ponad tysiącem osób zarówno w kontekście ich pracy zawodowej jak
                też w życiu prywatnym. Mam świadomość jak obie te sfery się
                przenikają.
              </ParagraphText>
              <AccordeonTable
                data={experience}
                scrollTo={ABOUT_EXPERIENCE_SECTION}
              />
            </SectionContent>
          </SectionLayout>
        </PageSection>
      </Fragment>
    )
  }
}

AboutPageBody.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(withLocales)(AboutPageBody)
