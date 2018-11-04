import React, {Component, Fragment} from 'react'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import styled from 'styled-components'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {compose, ms} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {
  COACHING_BUSINESS_SECTION,
  COACHING_LIFE_SECTION,
} from 'src/constants/SectionNames'
import {H1, HeroSection, PageNavigation, HeroImage} from 'src/components'

import {CoachingPageBody} from 'src/containers'

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
      config,
      location,
      data: {heroImage},
    } = this.props
    return (
      <Layout location={location} withTopPadding>
        <Helmet title={`Coaching | ${config('siteTitle')}`} />
        <HeroSection
          image={
            <HeroImage
              maxWidth={IMAGE_WIDTH}
              outerWrapperClassName="__image-outer-wrapper"
              innerWrapperClassName="__image-inner-wrapper"
              title="hand image"
              alt="Home "
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
  config: PropTypes.func.isRequired,
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
