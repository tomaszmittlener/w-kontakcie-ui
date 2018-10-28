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
import { THERAPY_WORK_AREA_SECTION, THERAPY_PRACTICAL_INFO_SECTION, THERAPY_METHODOLOGY_SECTION } from 'src/constants/SectionNames';

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
const HeroAuthorParagraph = styled(ParagraphText)`
  text-align: center;
  font-size: ${ms(1)};

  margin: ${ms(0)} 0 0 0;
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
// const svgTag = '<svg id="scene" class="scene" width="100%" height="100vh" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns:pathdata="http://www.codrops.com/">  <path d="M 1066,436 C 1051,543.8 973.2,656.2 873.6,700.1 756.6,751.7 600.9,725 492.4,657.4 431.5,619.5 387.5,546.9 376.7,476 360.3,368.3 377.9,229.2 462.5,160.5 589.5,57.34 815.4,42.24 952.4,131.7 1044,190.8 1081,328.8 1066,436 Z" pathdata:id="M 1041,450.4 C 1023,547.7 992.8,667.7 905.7,714.5 793.1,775 639,728.7 524.5,671.8 453.3,636.4 382.2,575.4 360.2,499 329.7,393 344.6,249.2 426,174.9 568.6,44.66 851.1,-8.71 1002,111.8 1091,182.7 1061,338.6 1041,450.4 Z;M 1066,436 C 1051,543.8 976.5,664.5 873.6,700.1 761,739.1 636.4,655.8 529.5,603.1 441.6,559.8 325.8,520.1 293.8,427.5 263.1,338.4 294.5,213.4 368.2,154.8 520.7,33.48 790.1,23.76 952.4,131.7 1043,191.7 1081,328.8 1066,436 Z;M 1066,436 C 1053,531.1 930.7,580.1 842.2,617.2 734,662.7 598.4,707.8 492.4,657.4 427.6,626.6 387.5,546.9 376.7,476 360.3,368.3 376.9,227.9 462.5,160.5 567.6,77.69 749.9,37.5 863.8,148.8 947.6,230.7 1082,320.1 1066,436 Z"/> </svg> <h2 class="title">Botanic Wisdom</h2>'


class PageBodyTherapy extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        {/*<ImageContainer className="content" dangerouslySetInnerHTML={{__html: svgTag}}/>*/}

        <PageSection topPadding>
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

        <PageSection topBottomPadding name={THERAPY_WORK_AREA_SECTION}>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('therapyPage.workAreaSection.title')}
              </SectionTitle>
              <StyledAccordeon data={workAreas} />
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection dark topBottomPadding name={THERAPY_PRACTICAL_INFO_SECTION}>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>
                {t('therapyPage.practicalInfoSection.title')}
              </SectionTitle>
              <StyledFeaturesTable data={therapyPracticalInfo} />
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection topBottomPadding finalSectionPadding name={THERAPY_METHODOLOGY_SECTION}>
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
