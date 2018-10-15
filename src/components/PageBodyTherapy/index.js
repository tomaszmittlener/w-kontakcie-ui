import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import {
  H2,
  H3,
  H4,
  ParagraphText,
  PageSection,
  SectionContent,
  SectionLayout,
} from 'src/components'
import {withLocales} from 'src/context/locales'
import map from 'lodash/map'
import {therapy, workAreas, therapyPracticalInfo} from '../../../data/TextLists'

const HeroQuoteParagraph = styled(H2)`
  text-align: center;
  font-style: italic;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`
const HeroAuthorParagraph = styled(ParagraphText)`
  text-align: right;
  font-size: ${ms(3)};
  line-height: ${ms(5)};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const SectionTitle = styled(H2)`
  text-align: center;
`

class PageBodyTherapy extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <HeroQuoteParagraph>
                {t('therapyPage.pageQuote')}
              </HeroQuoteParagraph>
              <HeroAuthorParagraph>
                {t('therapyPage.pageQuoteAuthor')}
              </HeroAuthorParagraph>
              {map(therapy, (section, sectionIndex) => (
                <Fragment key={`therapy-${section.title}-${sectionIndex}`}>
                  {section.title && <H3>{section.title}</H3>}
                  <ParagraphText>{section.description}</ParagraphText>
                </Fragment>
              ))}
            </SectionContent>
          </SectionLayout>
        </PageSection>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('therapyPage.workAreaSection.title')}
              </SectionTitle>
              {map(workAreas, (area, areaIndex) => (
                <Fragment key={`therapy-${area.title}-${areaIndex}`}>
                  {area.title && <H3>{area.title}</H3>}
                  <ParagraphText>{area.description}</ParagraphText>
                  <ul>
                    {map(area.bullets, (bullet, bulletIndex) => (
                      <li
                        key={`therapy-${
                          area.title
                        }-${areaIndex}-${bulletIndex}`}>
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
                {t('therapyPage.practicalInfoSection.title')}
              </SectionTitle>
              {map(therapyPracticalInfo, (info, areaIndex) => (
                <Fragment key={`practicalInfo-${info.title}-${areaIndex}`}>
                  {info.title && <H3>{info.title}</H3>}
                  <ParagraphText>{info.description}</ParagraphText>
                  <ul>
                    {map(info.bullets, (bullet, bulletIndex) => (
                      <li
                        key={`therapy-${
                          info.title
                        }-${areaIndex}-${bulletIndex}`}>
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

PageBodyTherapy.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(withLocales)(PageBodyTherapy)
