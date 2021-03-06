import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'utils/index'
import {
  H2,
  ParagraphText,
  PageSection,
  SectionLayout,
  SectionContent,
  GraphIcon,
  AppleIcon,
  AccordeonTable,
  Quote,
} from 'components'
import {withLocales} from 'context/locales'
import {StyledFirstLetter} from 'layout/mixins'
import {
  COACHING_BUSINESS_SECTION,
  COACHING_LIFE_SECTION,
  COACHING_LIFE_ADVANTAGES_SECTION,
  COACHING_BUSINESS_ADVANTAGES_SECTION,
} from 'constants/SectionNames'

import {
  businessCoachingAdvantages,
  lifeCoachingAdvanatages,
} from 'constants/TextLists'

const SectionTitle = styled(H2)`
  text-align: left;
`

const CenteredSectionTitle = styled(H2)`
  text-align: center;
`

const FormattedTextSectionContent = styled(SectionContent)`
  ${StyledFirstLetter};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CoachingImageContainer = styled.figure`
  display: none;
  align-items: center;
  > svg {
    height: 150px;
    opacity: 0.1;
  }
  ${({theme: {mq}}) => mq.desktopL} {
    display: block;
    margin: 0 0 0 ${ms(10)};
    > svg {
      height: 200px;
      opacity: 1;
    }
  }
`
const LifeCoachingImageContainer = styled(CoachingImageContainer)`
  ${({theme: {mq}}) => mq.desktop} {
    margin: 0 ${ms(10)} 0 0;
  }
`

const CoachingTextContainer = styled.div`
  order: 1;
  ${({theme: {mq}}) => mq.desktop} {
    order: unset;
  }
`
const CoachingArticle = styled.article`
  p {
    &:first-of-type {
      margin: 0 0 ${ms(3)};
    }
    margin: 0 0 ${ms(1)};
  }
  ${({theme: {mq}}) => mq.desktop} {
    column-count: 2;
    max-height: ${ms(21)};
  }
`

const CoachingWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
  }
`

const BusinessAdvanatagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${({theme: {mq}}) => mq.tablet} {
    flex-direction: row;
  }
`

class PageBodyCoaching extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection topPadding>
          <SectionLayout>
            <SectionContent>
              <Quote text={t('coachingPage.pageQuote')} />
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection topPadding name={COACHING_BUSINESS_SECTION}>
          <SectionLayout>
            <FormattedTextSectionContent>
              <CoachingWrapper>
                <CoachingTextContainer>
                  <SectionTitle>
                    {t('coachingPage.businessCoachingSection.title')}
                  </SectionTitle>
                  <CoachingArticle>
                    <ParagraphText>
                      {t('coachingPage.businessCoachingSection.infoText')}
                    </ParagraphText>
                    <ParagraphText>
                      {t('coachingPage.businessCoachingSection.infoText2')}
                    </ParagraphText>
                    <ParagraphText>
                      {t('coachingPage.businessCoachingSection.infoText3')}
                    </ParagraphText>
                  </CoachingArticle>
                </CoachingTextContainer>
                <CoachingImageContainer>
                  <GraphIcon />
                </CoachingImageContainer>
              </CoachingWrapper>
            </FormattedTextSectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection
          topBottomPadding
          name={COACHING_BUSINESS_ADVANTAGES_SECTION}>
          <SectionLayout>
            <SectionContent>
              <CenteredSectionTitle>Korzyści</CenteredSectionTitle>
              <BusinessAdvanatagesContainer>
                <AccordeonTable
                  data={businessCoachingAdvantages}
                  scrollTo={COACHING_BUSINESS_ADVANTAGES_SECTION}
                />
              </BusinessAdvanatagesContainer>
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection dark topBottomPadding name={COACHING_LIFE_SECTION}>
          <SectionLayout>
            <FormattedTextSectionContent>
              <CoachingWrapper>
                <LifeCoachingImageContainer>
                  <AppleIcon />
                </LifeCoachingImageContainer>
                <CoachingTextContainer>
                  <SectionTitle>
                    {t('coachingPage.lifeCoachingSection.title')}
                  </SectionTitle>
                  <CoachingArticle>
                    <ParagraphText>
                      {t('coachingPage.lifeCoachingSection.infoText')}
                    </ParagraphText>
                    <ParagraphText>
                      {t('coachingPage.lifeCoachingSection.infoText2')}
                    </ParagraphText>
                    <ParagraphText>
                      {t('coachingPage.lifeCoachingSection.infoText3')}
                    </ParagraphText>
                  </CoachingArticle>
                </CoachingTextContainer>
              </CoachingWrapper>
            </FormattedTextSectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection
          dark
          finalSectionPadding
          name={COACHING_LIFE_ADVANTAGES_SECTION}>
          <SectionLayout>
            <SectionContent>
              <CenteredSectionTitle>Korzyści</CenteredSectionTitle>
              <BusinessAdvanatagesContainer>
                <AccordeonTable
                  data={lifeCoachingAdvanatages}
                  scrollTo={COACHING_LIFE_ADVANTAGES_SECTION}
                />
              </BusinessAdvanatagesContainer>
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
