import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import {
  H2,
  H3,
  H4,
  PageSection,
  ParagraphText,
  SectionLayout,
  SectionContent,
} from 'src/components'
import {withLocales} from 'src/context/locales'
import map from 'lodash/map'
import {experience, competences} from '../../../data/TextLists'

const NameText = styled(H2)`
  font-weight: bold;
  text-align: center;
`

const SectionTitle = styled(H2)`
  text-align: center;
`
const ProfessionText = styled(H4)`
  font-size: ${ms(0)};
  text-align: center;
  font-weight: bold;
`

class AboutPageBody extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <NameText>{t('owner.name')}</NameText>
              <ProfessionText>{t('owner.profession')}</ProfessionText>
              <ParagraphText>{t('owner.description.main')}</ParagraphText>
              <ParagraphText>{t('owner.description.accented')}</ParagraphText>
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('articlesPage.competencesSection.title')}
              </SectionTitle>
              <ul>
                {map(competences[0].bullets, (competence, competenceIndex) => (
                  <li key={`competence-${competenceIndex}`}>{competence}</li>
                ))}
              </ul>
            </SectionContent>
          </SectionLayout>
        </PageSection>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('articlesPage.experienceSection.title')}
              </SectionTitle>
              {map(experience, (exp, expIndex) => (
                <Fragment key={`therapy-${exp.title}-${expIndex}`}>
                  {exp.title && <H4>{exp.title}</H4>}
                  <ParagraphText>{exp.description}</ParagraphText>
                  <ul>
                    {map(exp.bullets, (bullet, bulletIndex) => (
                      <li
                        key={`therapy-${exp.title}-${expIndex}-${bulletIndex}`}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
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
