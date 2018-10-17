import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {compose, ms} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {
  H1,
  HumanImage,
  PlantBrainImage,
  SectionContent,
  SectionLayout,
  PageBodyCoaching,
  MechanicBrainImage,
  PuzzleImage,
  H2,
} from 'src/components'
import Theme from 'src/layout/theme'
import styled from 'styled-components'

const HeroSection = styled.header`
  padding: ${ms(13)} 0 ${ms(10)} 0;
  background-color: ${({theme: {colors}}) => colors.third};
`

const HumanAnimation = styled.div`
  position: relative;
  width: 312px;
  margin-top: 100px;
  height: 500px;
`

const HeroSectionContent = styled(SectionContent)`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
  }
`

const HeroText = styled.div`
  flex: 1;
`

const HeroIllustration = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: ${ms(4)} 0 0 0;
  > svg {
    height: 200px;
  }
  ${({theme: {mq}}) => mq.desktop} {
    margin: 0 0 0 ${ms(4)};
    > svg {
      height: 350px;
    }
  }
`


class CoachingPage extends Component {
  render() {
    const {t, config, location} = this.props
    return (
      <Layout location={location} withTopPadding>
        <Helmet title={`Coaching | ${config('siteTitle')}`} />
        <HeroSection>
          <SectionLayout>
            <HeroSectionContent>
              <HeroText>
                <H1>{t('coachingPage.pageTitle')}</H1>
              </HeroText>
              <HeroIllustration>
                <MechanicBrainImage />
              </HeroIllustration>
            </HeroSectionContent>
          </SectionLayout>
        </HeroSection>
        <PageBodyCoaching />
      </Layout>
    )
  }
}

CoachingPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  config: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(CoachingPage)
