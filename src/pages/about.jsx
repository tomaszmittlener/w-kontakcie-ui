import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {compose} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {graphql} from 'gatsby'
import {
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'
import {
  H1,
  HeroSection,
  PageNavigation,
  HeroImage,
} from 'src/components'
import {AboutPageBody} from 'src/containers'
import styled from 'styled-components'
import {
  ABOUT_ME_SECTION,
  ABOUT_COMPETENCES_SECTION,
  ABOUT_EXPERIENCE_SECTION,
} from 'src/constants/SectionNames'

const PageTitle = styled(H1)`
  //text-align: center;
`

const linksData = [
  {
    to: ABOUT_ME_SECTION,
    name: 'Anna Dejewska',
  },
  {
    to: ABOUT_COMPETENCES_SECTION,
    name: 'Kompetencje',
  },
  {
    to: ABOUT_EXPERIENCE_SECTION,
    name: 'Doświadczenie',
  },
]


class AboutPage extends Component {
  render() {
    const {
      data: {meImage, heroImage},
      config,
      t,
    } = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`O mnie | ${config('siteTitle')}`} />
        <HeroSection
          image={
            <HeroImage
              outerWrapperClassName="gatsbyImageWrapper"
              title="hand image"
              alt="hand image"
              sizes={heroImage.childImageSharp.fluid}
            />
          }>
          <PageTitle>{t('aboutMePage.pageTitle')}</PageTitle>
          <PageNavigation linksData={linksData} />
        </HeroSection>
        <AboutPageBody meImage={meImage} />
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  config: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    meImage: imageFluidPropTypesShape.isRequired,
  }).isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(AboutPage)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AboutPageQuery {
    heroImage: file(relativePath: {eq: "woman.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meImage: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
