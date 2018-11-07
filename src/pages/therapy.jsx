import React, {Component} from 'react'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {compose} from 'src/utils'
import styled from 'styled-components'
import {withLocales, withLocalesContextProvider} from 'src/context'
import {
  H1,
  HeroSection,
  HeroQuote,
  PageNavigation,
  Pattern,
  HeroImage,
} from 'src/components'
import {TherapyPageBody} from 'src/containers'
import {
  THERAPY_METHODOLOGY_SECTION,
  THERAPY_PRACTICAL_INFO_SECTION,
  THERAPY_WORK_AREA_SECTION,
} from 'src/constants/SectionNames'
import config from '../../data/SiteConfig'

const IMAGE_WIDTH = 400

const linksData = [
  {
    to: THERAPY_WORK_AREA_SECTION,
    name: 'Obszary Pracy',
  },
  {
    to: THERAPY_PRACTICAL_INFO_SECTION,
    name: 'Informacje praktyczne',
  },
  {
    to: THERAPY_METHODOLOGY_SECTION,
    name: 'Metodologia',
  },
]

class TherapyPage extends Component {
  render() {
    const {
      data: {heroImage},
      t,
    } = this.props

    return (
      <Layout location={this.props.location} withTopPadding>
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
          <H1>{t('therapyPage.pageTitle')}</H1>
          <PageNavigation linksData={linksData} />
        </HeroSection>

        <TherapyPageBody />
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

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TherapyPageQuery {
    heroImage: file(relativePath: {eq: "therapy_hero.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
