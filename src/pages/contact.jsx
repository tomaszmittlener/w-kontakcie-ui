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
  PlaneIcon,
  PhoneIcon,
  ContactImage,
  Link,
} from 'src/components'
import {
  withAppContext,
  withAppContextProvider,
  withLocales,
  withLocalesContextProvider,
} from 'src/context'

const HeroSection = styled.header`
  padding: ${ms(13)} 0 0;
  background-color: ${({theme: {colors}}) => colors.third};
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(13)} 0 ${ms(11)};
  }
`

const HumanAnimation = styled.div`
  position: relative;
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
  margin: ${ms(10)} 0 0 0;
  ${({theme: {mq}}) => mq.desktop} {
    margin: 0 0 0 ${ms(4)};
  }
`

const HeroQuoteParagraph = styled.p`
  font-size: ${ms(3)};
  line-height: ${ms(3.5)};
  margin: 0 0 ${ms(0)} 0;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
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
                <H1>Kontakt</H1>
                <HeroQuoteParagraph>
                  tel:{' '}
                  <Link to={`tel:${t('owner.phone')}`}>{t('owner.phone')}</Link>
                </HeroQuoteParagraph>
                <HeroQuoteParagraph>
                  email:{' '}
                  <Link to={`mailto:${t('owner.email')}`}>
                    {t('owner.email')}
                  </Link>
                </HeroQuoteParagraph>
              </HeroText>
              <HeroIllustration>
                <HumanAnimation>
                  <ContactImage />
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
