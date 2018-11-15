import React, {Component} from 'react'
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layout'
import styled from 'styled-components'
import {compose, ms} from 'utils'
import {locationPropTypesShape} from 'utils/PropTypes'
import {H1, Link, HeroSection, HeroImage} from 'components'
import {withLocales, withLocalesContextProvider} from 'context'
import {ContactPageBody} from 'containers'

const IMAGE_WIDTH = 330
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
    const {
      t,
      data: {heroImage},
      location,
    } = this.props
    return (
      <Layout location={location} withTopPadding>
        <HeroSection
          image={
            <HeroImage
              maxWidth={IMAGE_WIDTH}
              outerWrapperClassName="__image-outer-wrapper"
              innerWrapperClassName="__image-inner-wrapper"
              title="hero"
              alt="Ilustracja tytułowa strony wrelacji/kontakt"
              sizes={heroImage.childImageSharp.fluid}
            />
          }>
          <H1>Kontakt</H1>
          <HeroQuoteParagraph>
            tel: <Link to={`tel:${t('owner.phone')}`}>{t('owner.phone')}</Link>
          </HeroQuoteParagraph>
          <HeroQuoteParagraph>
            email:{' '}
            <Link to={`mailto:${t('owner.email')}`}>{t('owner.email')}</Link>
          </HeroQuoteParagraph>
        </HeroSection>
        <ContactPageBody />
      </Layout>
    )
  }
}

ContactPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  t: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(ContactPage)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ContactPageQuery {
    heroImage: file(relativePath: {eq: "contact_hero.png"}) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
