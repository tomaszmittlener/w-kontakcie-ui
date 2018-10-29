import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils/index'
import {
  H2,
  H3,
  ParagraphText,
  PageSection,
  SectionLayout,
  SectionContent,
  GraphIcon,
  AppleIcon,
  TwoArrowsIcon,
  AccordeonTable,
} from 'src/components/index'
import {withLocales} from 'src/context/locales'
import {StyledFirstLetter} from 'src/layout/mixins'
import {
  COACHING_BUSINESS_SECTION,
  COACHING_LIFE_SECTION, THERAPY_METHODOLOGY_SECTION
} from 'src/constants/SectionNames';

import {
  businessCoachingAdvantages,
  lifeCoachingAdvanatages,
} from '../../../data/TextLists'

const SectionTitle = styled(H2)`
  text-align: left;
`

const CenteredSectionTitle = SectionTitle.extend`
  text-align: center;
`

const ImageContainer = styled.figure`
  margin: 0;
  text-align: center;
  svg {
    height: 300px;
  }

  ${({theme: {mq}}) => mq.desktop} {
    svg {
      height: 300px;
    }
  }
`

const FormattedTextSectionContent = SectionContent.extend`
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
const LifeCoachingImageContainer = CoachingImageContainer.extend`
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
      font-style: italic;
      margin: 0 0 ${ms(3)};
    }
    margin: 0 0 ${ms(1)};
  }
  ${({theme: {mq}}) => mq.desktop} {
    column-count: 3;
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
              <QuoteParagraph> {t('coachingPage.pageQuote')}</QuoteParagraph>
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

        {/*<PageSection bottomPadding>*/}
          {/*<SectionLayout>*/}
            {/*<SectionContent>*/}
              {/*<ImageContainer>*/}
                {/*<TwoArrowsIcon />*/}
              {/*</ImageContainer>*/}
            {/*</SectionContent>*/}
          {/*</SectionLayout>*/}
        {/*</PageSection>*/}

        <PageSection topBottomPadding name="target2">
          <SectionLayout>
            <SectionContent>
              <CenteredSectionTitle>Korzyści</CenteredSectionTitle>
              <BusinessAdvanatagesContainer>
                <AccordeonTable data={businessCoachingAdvantages} />
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

        {/*<PageSection dark bottomPadding>*/}
          {/*<SectionLayout>*/}
            {/*<SectionContent>*/}
              {/*<ImageContainer>*/}
                {/*<TwoArrowsIcon />*/}
              {/*</ImageContainer>*/}
            {/*</SectionContent>*/}
          {/*</SectionLayout>*/}
        {/*</PageSection>*/}

        <PageSection
          dark
          finalSectionPadding
          name={THERAPY_METHODOLOGY_SECTION}>
          <SectionLayout>
            <SectionContent>
              <CenteredSectionTitle>Korzyści</CenteredSectionTitle>
              <BusinessAdvanatagesContainer>
                <AccordeonTable data={lifeCoachingAdvanatages} />
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
