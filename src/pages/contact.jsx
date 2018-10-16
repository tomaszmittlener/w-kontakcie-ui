import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import styled from 'styled-components'
import {compose, ms} from 'src/utils'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {
  H1,
  PageBodyContact,
  SectionLayout,
  HumanImage,
  MazeBrainImage,
  ParagraphText,
  SectionContent,
} from 'src/components'
import {
  withAppContext,
  withAppContextProvider,
  withLocales,
  withLocalesContextProvider,
} from 'src/context'

const HeroSection = styled.header`
  padding: ${ms(13)} 0 ${ms(11)};
  background-color: ${({theme: {colors}}) => colors.third};
`

const HeroParagraph = styled(ParagraphText)`
  font-size: ${ms(5)};
  line-height: ${ms(5)};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const HumanAnimation = styled.div`
  position: relative;
  height: 457px;
  width: 312px;
`

const Brain = styled(MazeBrainImage)`
  position: absolute;
  left: 70px;
  top: 40px;
`
const Human = styled(HumanImage)`
  position: absolute;
`
const HeroSectionContent = styled(SectionContent)`
  display: flex;
  align-items: center;
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
`

class ContactPage extends Component {
  render() {
    const {t, config} = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Kontakt | ${config.siteTitle}`} />
        <HeroSection>
          <SectionLayout>
            <HeroSectionContent>
              <HeroText>
                <H1>{t('company.name')}</H1>
                <HeroParagraph>{t('company.type')}</HeroParagraph>
              </HeroText>
              <HeroIllustration>
                <HumanAnimation>
                  <Human />
                  <Brain />
                </HumanAnimation>
              </HeroIllustration>
            </HeroSectionContent>
          </SectionLayout>
        </HeroSection>
        <PageBodyContact />
      </Layout>
    )
  }
}

ContactPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  config: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(ContactPage)
