import React, {Component} from 'react'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layout'
import {locationPropTypesShape} from 'utils/PropTypes'
import {compose} from 'utils'
import {withLocales, withLocalesContextProvider} from 'context'
import {
  H1,
  HeroSection,
  PageNavigation,
  HeroImage,
} from 'components'
import {TherapyPageBody} from 'containers'
import {
  THERAPY_METHODOLOGY_SECTION,
  THERAPY_PRACTICAL_INFO_SECTION,
  THERAPY_WORK_AREA_SECTION,
} from 'constants/SectionNames'

const IMAGE_WIDTH = 330

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
      location,
      t,
    } = this.props

    return (
      <Layout location={location} withTopPadding>
        <HeroSection
          image={
            <HeroImage
              maxWidth={IMAGE_WIDTH}
              outerWrapperClassName="__image-outer-wrapper"
              innerWrapperClassName="__image-inner-wrapper"
              title="Hero"
              alt="Ilustracja tytułowa strony wrelacji/terapia"
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
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
