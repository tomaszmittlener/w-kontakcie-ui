import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import sal from 'sal.js'
import {
  H2,
  H4,
  PageSection,
  ParagraphText,
  SectionLayout,
  SectionContent,
  AccordeonTable,
} from 'src/components'
import {withLocales} from 'src/context/locales'
import map from 'lodash/map'
import {MaxWidthText, StyledFirstLetter} from 'src/layout/mixins'
import {experience, competences} from '../../../data/TextLists'

const NameText = styled(H2)`
  font-weight: bold;
  text-align: center;
  margin: 0 0 ${ms(0)} 0;
`

const SectionTitle = styled(H2)`
  text-align: left;
`
const ProfessionText = styled(H4)`
  font-size: ${ms(1)};
  text-align: center;
  font-weight: bold;
  margin: 0 0 ${ms(5)} 0;
`

const ParagraphSectionContent = styled(SectionContent)`
  ${StyledFirstLetter} ${MaxWidthText};
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
  margin: 0 0 ${ms(6)} 0;
  width: 100%;
  align-items: center;
`

const ItemFigure = styled.figure`
  margin: 0 ${ms(3)} 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const ItemTitle = styled(ParagraphText)`
  margin: 0;
  display: block;
  font-size: ms(0.5);
  flex: 5;
`

class AboutPageBody extends React.Component {
  render() {
    const {t} = this.props
    sal()
    return (
      <Fragment>
        <PageSection>
          <SectionLayout>
            <ParagraphSectionContent>
              <NameText>{t('owner.name')}</NameText>
              <ProfessionText>{t('owner.profession')}</ProfessionText>
              <ParagraphText size={ms(0.5)}>
                {t('owner.description.main')}
              </ParagraphText>
              <ParagraphText size={ms(0.5)}>
                {t('owner.description.accented')}
              </ParagraphText>
            </ParagraphSectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('articlesPage.competencesSection.title')}
              </SectionTitle>
              <ItemsContainer>
                {map(competences, (competence, competenceIndex) => (
                  <Item
                    key={competenceIndex}>
                    <ItemFigure>{competence.img}</ItemFigure>
                    <ItemTitle>{competence.title}</ItemTitle>
                  </Item>
                ))}
              </ItemsContainer>
            </SectionContent>
          </SectionLayout>
        </PageSection>
        <PageSection>
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
              <AccordeonTable data={experience} />
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
