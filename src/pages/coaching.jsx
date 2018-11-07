import React, {Component} from 'react'
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {compose} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {H1, HeroSection, PageNavigation, HeroImage} from 'src/components'
import {CoachingPageBody} from 'src/containers'
import {
  COACHING_BUSINESS_SECTION,
  COACHING_LIFE_SECTION,
} from 'src/constants/SectionNames'

const IMAGE_WIDTH = 400
const linksData = [
  {
    to: COACHING_BUSINESS_SECTION,
    name: 'Business Coaching',
  },
  {
    to: COACHING_LIFE_SECTION,
    name: 'Life Coaching',
  },
]

class CoachingPage extends Component {
  render() {
    const {
      t,
      location,
      data: {heroImage},
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
              alt="Ilustracja tytułowa strony wrelacji/coaching"
              sizes={heroImage.childImageSharp.fluid}
            />
          }>
          <H1>{t('coachingPage.pageTitle')}</H1>
          <PageNavigation linksData={linksData} />
        </HeroSection>
        <CoachingPageBody />
      </Layout>
    )
  }
}

CoachingPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(CoachingPage)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CoachingPageQuery {
    heroImage: file(relativePath: {eq: "coaching_hero.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
