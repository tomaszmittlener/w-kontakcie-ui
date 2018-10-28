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
} from 'src/components'
import {TherapyPageBody} from 'src/containers'
import {
  THERAPY_METHODOLOGY_SECTION,
  THERAPY_PRACTICAL_INFO_SECTION,
  THERAPY_WORK_AREA_SECTION,
} from 'src/constants/SectionNames'

import config from '../../data/SiteConfig'

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

const HeroImage = styled(Img)`
  height: 100%;
  width: 300px;
  margin: 0 auto;
  opacity: 0.4;
`

class TherapyPage extends Component {
  render() {
    const {
      data: {heroImage},
      t,
    } = this.props

    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Psychoterapia | ${config.siteTitle}`} />

        <HeroSection
          image={
            <HeroImage
              outerWrapperClassName="gatsbyImageWrapper"
              title="hand image"
              alt="hand image"
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
    heroImage: file(relativePath: {eq: "health.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
