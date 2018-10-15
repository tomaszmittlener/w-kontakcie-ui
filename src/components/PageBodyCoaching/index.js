import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import {
  H2,
  H3,
  ParagraphText,
  PageSection,
  SectionLayout,
  SectionContent,
} from 'src/components'
import {withLocales} from 'src/context/locales'
import map from 'lodash/map'
import {
  businessCoachingAdvantages,
  lifeCoachingAdvanatages,
} from '../../../data/TextLists'

const SectionTitle = styled(H2)`
  text-align: center;
`

class PageBodyCoaching extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('coachingPage.businessCoachingSection.title')}
              </SectionTitle>
              <ParagraphText>
                {t('coachingPage.businessCoachingSection.infoText')}
              </ParagraphText>
              <ParagraphText>
                {t('coachingPage.businessCoachingSection.infoText2')}
              </ParagraphText>
              <ParagraphText>
                {t('coachingPage.businessCoachingSection.infoText3')}
              </ParagraphText>
              {map(businessCoachingAdvantages, (entry, entryIndex) => (
                <Fragment key={`therapy-${entry.title}-${entryIndex}`}>
                  {entry.title && <H3>{entry.title}</H3>}
                  <H3>{entry.description}</H3>
                  <ul>
                    {map(entry.bullets, (bullet, bulletIndex) => (
                      <li
                        key={`therapy-${
                          entry.title
                        }-${entryIndex}-${bulletIndex}`}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </SectionContent>
          </SectionLayout>
        </PageSection>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('coachingPage.lifeCoachingSection.title')}
              </SectionTitle>
              <ParagraphText>
                {t('coachingPage.lifeCoachingSection.infoText')}
              </ParagraphText>
              <ParagraphText>
                {t('coachingPage.lifeCoachingSection.infoText2')}
              </ParagraphText>
              <ParagraphText>
                {t('coachingPage.lifeCoachingSection.infoText3')}
              </ParagraphText>
              {map(lifeCoachingAdvanatages, (entry, entryIndex) => (
                <Fragment key={`practicalInfo-${entry.title}-${entryIndex}`}>
                  {entry.title && <H3>{entry.title}</H3>}
                  <ParagraphText>{entry.description}</ParagraphText>
                  <ul>
                    {map(entry.bullets, (bullet, bulletIndex) => (
                      <li
                        key={`therapy-${
                          entry.title
                        }-${entryIndex}-${bulletIndex}`}>
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

PageBodyCoaching.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(withLocales)(PageBodyCoaching)
