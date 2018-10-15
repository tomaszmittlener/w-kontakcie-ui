import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {compose, ms} from 'src/utils'
import styled from 'styled-components'
import {withLocales, withLocalesContextProvider} from 'src/context'
import Theme from 'src/layout/theme'
import {
  H1,
  HumanImage,
  PuzzleImage,
  ParagraphText,
  SectionContent,
  SectionLayout,
  PageBodyTherapy,
  PlantBrainImage,
} from 'src/components'
import config from '../../data/SiteConfig'

const HeroSection = styled.header`
  padding: ${ms(13)} 0 0;
  background-color: ${({theme: {colors}}) => colors.third};
`

const HumanAnimation = styled.div`
  position: relative;
  width: 312px;
  margin-top: 100px;
  height: 500px;
  transform: translateX(-20px);
`

const Puzzle = styled(PlantBrainImage)`
  position: absolute;
  left: 150px;
  top: -100px;
`
const Human = styled(HumanImage)`
  position: absolute;
  transform: rotate(20deg);
`
const HeroSectionContent = styled(SectionContent)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  &:before {
    background-color: ${({theme: {colors}}) => colors.canvas};
    bottom: 0;
    content: '';
    height: 30%;
    position: absolute;
    width: 100vw;
  }
`
const HeroText = styled.div`
  flex: 1;
`

const HeroIllustration = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

class TherapyPage extends Component {
  render() {
    const {t} = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Psychoterapia | ${config.siteTitle}`} />
        <HeroSection>
          <SectionLayout>
            <HeroSectionContent>
              <HeroText>
                <H1>{t('therapyPage.pageTitle')}</H1>
              </HeroText>
              <HeroIllustration>
                <HumanAnimation>
                  <Human strokeColor={Theme.colors.third} />
                  <Puzzle />
                </HumanAnimation>
              </HeroIllustration>
            </HeroSectionContent>
          </SectionLayout>
        </HeroSection>
        <PageBodyTherapy />
      </Layout>
    )
  }
}

TherapyPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(TherapyPage)
