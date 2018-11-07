import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils/index'
import {StyledFirstLetter} from 'src/layout/mixins'
import {withLocales} from 'src/context/locales'
import {
  H2,
  H3,
  ParagraphText,
  PageSection,
  SectionContent,
  SectionLayout,
  Accordeon,
  FeaturesTable,
  Quote,
} from 'src/components/index'
import {
  THERAPY_WORK_AREA_SECTION,
  THERAPY_PRACTICAL_INFO_SECTION,
  THERAPY_METHODOLOGY_SECTION,
} from 'src/constants/SectionNames'
import {therapy, workAreas, therapyPracticalInfo} from '../../../data/TextLists'

const SectionTitle = styled(H2)`
  text-align: center;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
  }
`

const StyledFeaturesTable = styled(FeaturesTable)`
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(4)} 0 0 0;
  }
`

const MethodologyText = styled.article`
  ${({theme: {mq}}) => mq.desktop} {
    column-count: 2;
  }

  ${({theme: {mq}}) => mq.desktopL} {
    column-count: 3;
  }
`

const MethodologySectionContent = styled(SectionContent)`
  ${StyledFirstLetter};
`

class PageBodyTherapy extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection topPadding>
          <SectionLayout>
            <SectionContent>
              <Quote
                text={t('therapyPage.pageQuote')}
                author={t('therapyPage.pageQuoteAuthor')}
              />
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection topBottomPadding name={THERAPY_WORK_AREA_SECTION}>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('therapyPage.workAreaSection.title')}
              </SectionTitle>
              <Accordeon
                data={workAreas}
                scrollTo={THERAPY_WORK_AREA_SECTION}
              />
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection
          dark
          topBottomPadding
          name={THERAPY_PRACTICAL_INFO_SECTION}>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('therapyPage.practicalInfoSection.title')}
              </SectionTitle>
              <StyledFeaturesTable data={therapyPracticalInfo} />
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection
          topBottomPadding
          finalSectionPadding
          name={THERAPY_METHODOLOGY_SECTION}>
          <SectionLayout>
            <MethodologySectionContent>
              <SectionTitle right>
                {t('therapyPage.methodologySection.title')}
              </SectionTitle>
              <MethodologyText>
                {therapy.map((section, sectionIndex) => (
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
