import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Layout from 'layout'
import {compose} from 'utils'
import {withLocalesContextProvider, withLocales} from 'context'
import {graphql} from 'gatsby'
import {imageFluidPropTypesShape, locationPropTypesShape} from 'utils/PropTypes'
import {H1, HeroSection, PageNavigation, HeroImage} from 'components'
import {AboutPageBody} from 'containers'
import {
  ABOUT_ME_SECTION,
  ABOUT_COMPETENCES_SECTION,
  ABOUT_EXPERIENCE_SECTION,
} from 'constants/SectionNames'

const IMAGE_WIDTH = 330

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
              title="hero"
              alt="Ilustracja tytułowa strony wrelacji/o mnie"
              sizes={heroImage.childImageSharp.fluid}
            />
          }>
          <H1>{t('aboutMePage.pageTitle')}</H1>
          <PageNavigation linksData={linksData} />
        </HeroSection>
        <AboutPageBody meImage={meImage} />
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  location: locationPropTypesShape.isRequired,
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
    heroImage: file(relativePath: {eq: "about_hero.png"}) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meImage: file(relativePath: {eq: "me_2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
