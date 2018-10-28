import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils/index'
import {
  H2,
  H3,
  H4,
  ParagraphText,
  PageSection,
  SectionContent,
  SectionLayout,
  Accordeon,
  FeaturesTable,
} from 'src/components/index'
import {withLocales} from 'src/context/locales'
import {StyledFirstLetter, MaxWidthText} from 'src/layout/mixins'
import map from 'lodash/map'
import {lighten} from 'polished'
import {therapy, workAreas, therapyPracticalInfo} from '../../../data/TextLists'

const QuoteParagraph = styled(H3)`
  text-align: center;
  font-style: italic;
  max-width: ${ms(22)};
  margin: 0 auto;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`
const HeroAuthorParagraph = styled(H4)`
  text-align: right;

  margin: 0;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const SectionTitle = styled(H2)`
  text-align: center;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
  }
`

const StyledAccordeon = styled(Accordeon)`
  padding: ${ms(4)} 0 0 0;
`

const StyledFeaturesTable = styled(FeaturesTable)`
  padding: ${ms(4)} 0 0 0;
`

const MethodologyText = styled.article`
  ${({theme: {mq}}) => mq.desktop} {
    column-count: 2;
  }

  ${({theme: {mq}}) => mq.desktopL} {
    column-count: 3;
  }
`

const MethodologySectionContent = SectionContent.extend`
  ${StyledFirstLetter};
`

class PageBodyTherapy extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection topBottomPadding>
          <SectionLayout>
            <SectionContent>
              <QuoteParagraph>{t('therapyPage.pageQuote')}
                <HeroAuthorParagraph>
                  {t('therapyPage.pageQuoteAuthor')}
                </HeroAuthorParagraph>
              </QuoteParagraph>

            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection bottomPadding>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('therapyPage.workAreaSection.title')}
              </SectionTitle>
              <StyledAccordeon data={workAreas} />
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection dark topBottomPadding>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('therapyPage.practicalInfoSection.title')}
              </SectionTitle>
              <StyledFeaturesTable data={therapyPracticalInfo} />
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection topBottomPadding>
          <SectionLayout>
            <MethodologySectionContent>
              <SectionTitle right>
                {t('therapyPage.methodologySection.title')}
              </SectionTitle>
              <MethodologyText>
                {map(therapy, (section, sectionIndex) => (
                  <Fragment key={`therapy-${section.title}-${sectionIndex}`}>
                    {section.title && <H3>{section.title}</H3>}
                    <ParagraphText>{section.description}</ParagraphText>
                  </Fragment>
                ))}
              </MethodologyText>
            </MethodologySectionContent>
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
