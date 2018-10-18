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
  GraphIcon,
  AppleIcon,
  FeaturesItems,
  TwoArrowsIcon,
} from 'src/components'
import {withLocales} from 'src/context/locales'
import map from 'lodash/map'
import {MaxWidthText, StyledFirstLetter} from 'src/layout/mixins'
import {lighten} from 'polished'

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
  p {
    ${MaxWidthText};
    max-width: 60ch;
  }
`

const CoachingImageContainer = styled.figure`
  display: none;
  align-items: center;
  > svg {
    height: 150px;
    opacity: 0.1;
  }
  ${({theme: {mq}}) => mq.desktop} {
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

const CoachingWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
  }
`

const QuoteParagraph = styled(H2)`
  text-align: center;
  font-style: italic;
  margin: 0;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const DarkPageSection = styled(PageSection)`
  background-color: ${({theme: {colors}}) => lighten(0.2, colors.third)};
  padding: ${ms(10)} 0;
`
const DesctiptionText = styled(H3)`
  text-align: center;
  display: inline-block;
  font-size: ${ms(2)};
  margin: ${ms(5)} 0;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
`

const BusinessAdvanatagesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({theme: {mq}}) => mq.tablet} {
    flex: 1;
    &:nth-of-type(even) {
      margin: 0 0 0 ${ms(4)};
    }
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
        <PageSection>
          <SectionLayout>
            <FormattedTextSectionContent>
              <CoachingWrapper>
                <CoachingTextContainer>
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
                </CoachingTextContainer>
                <CoachingImageContainer>
                  <GraphIcon />
                </CoachingImageContainer>
              </CoachingWrapper>
            </FormattedTextSectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection>
          <SectionLayout>
            <SectionContent>
              <ImageContainer>
                <TwoArrowsIcon />
              </ImageContainer>
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection>
          <SectionLayout>
            <SectionContent>
              <CenteredSectionTitle>Korzyści</CenteredSectionTitle>
              <BusinessAdvanatagesContainer>
                {map(businessCoachingAdvantages, (entry, entryIndex) => (
                  <BusinessAdvanatagesWrapper
                    key={`therapy-${entry.title}-${entryIndex}`}>
                    <FeaturesItems
                      bullets={entry.bullets}
                      title={entry.description}
                    />
                  </BusinessAdvanatagesWrapper>
                ))}
              </BusinessAdvanatagesContainer>
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <DarkPageSection>
          <SectionLayout>
            <SectionContent>
              <QuoteParagraph> {t('coachingPage.pageQuote')}</QuoteParagraph>
            </SectionContent>
          </SectionLayout>
        </DarkPageSection>

        <PageSection>
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
                  <ParagraphText>
                    {t('coachingPage.lifeCoachingSection.infoText')}
                  </ParagraphText>
                  <ParagraphText>
                    {t('coachingPage.lifeCoachingSection.infoText2')}
                  </ParagraphText>
                  <ParagraphText>
                    {t('coachingPage.lifeCoachingSection.infoText3')}
                  </ParagraphText>
                </CoachingTextContainer>
              </CoachingWrapper>
            </FormattedTextSectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection>
          <SectionLayout>
            <SectionContent>
              <ImageContainer>
                <TwoArrowsIcon />
              </ImageContainer>
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection>
          <SectionLayout>
            <SectionContent>
              <CenteredSectionTitle>Korzyści</CenteredSectionTitle>
              <BusinessAdvanatagesContainer>
                {map(lifeCoachingAdvanatages, (entry, entryIndex) => (
                  <BusinessAdvanatagesWrapper
                    key={`practicalInfo-${entry.title}-${entryIndex}`}>
                    <DesctiptionText>{entry.description}</DesctiptionText>
                    <FeaturesItems bullets={entry.bullets} />
                  </BusinessAdvanatagesWrapper>
                ))}
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
