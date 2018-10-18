import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import {
  H2,
  H3,
  ParagraphText,
  PageSection,
  SectionContent,
  SectionLayout,
  Accordeon,
  FeaturesTable,
} from 'src/components'
import {withLocales} from 'src/context/locales'
import {StyledFirstLetter, MaxWidthText} from 'src/layout/mixins'
import map from 'lodash/map'
import {lighten} from 'polished'
import {therapy, workAreas, therapyPracticalInfo} from '../../../data/TextLists'

const QuoteParagraph = styled(H2)`
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
const DarkPageSection = styled(PageSection)`
  background-color: ${({theme: {colors}}) => lighten(0.2, colors.third)};
  padding: ${ms(10)} 0;
`

const StyledAccordeon = styled(Accordeon)`
  padding: ${ms(4)} 0 0 0;
`

const StyledFeaturesTable = styled(FeaturesTable)`
  padding: ${ms(4)} 0 0 0;
`

const MethodologySectionContent = SectionContent.extend`
  ${StyledFirstLetter};
  ${MaxWidthText};
`

class PageBodyTherapy extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection>
          <SectionLayout>
            <MethodologySectionContent>
              <SectionTitle>
                {t('therapyPage.methodologySection.title')}
              </SectionTitle>
              {map(therapy, (section, sectionIndex) => (
                <Fragment key={`therapy-${section.title}-${sectionIndex}`}>
                  {section.title && <H3>{section.title}</H3>}
                  <ParagraphText>{section.description}</ParagraphText>
                </Fragment>
              ))}
            </MethodologySectionContent>
          </SectionLayout>
        </PageSection>
        <DarkPageSection>
          <SectionLayout>
            <SectionContent>
              <QuoteParagraph>{t('therapyPage.pageQuote')}</QuoteParagraph>
              <HeroAuthorParagraph>
                {t('therapyPage.pageQuoteAuthor')}
              </HeroAuthorParagraph>
            </SectionContent>
          </SectionLayout>
        </DarkPageSection>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('therapyPage.workAreaSection.title')}
              </SectionTitle>
              <StyledAccordeon data={workAreas} />
            </SectionContent>
          </SectionLayout>
        </PageSection>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('therapyPage.practicalInfoSection.title')}
              </SectionTitle>
              <StyledFeaturesTable data={therapyPracticalInfo} />
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
