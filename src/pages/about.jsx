import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {compose, ms} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {graphql} from 'gatsby'
import {
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'
import {H1, HeroSection} from 'src/components'
import {AboutPageBody} from 'src/containers'
import styled from 'styled-components'
import Img from 'gatsby-image'

const PageTitle = styled(H1)`
  text-align: center;
`
const Avatar = styled(Img)`
  width: 100%;
  height: 100%;
`

class AboutPage extends Component {
  render() {
    const {
      data: {meImage},
      config,
      t,
    } = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`O mnie | ${config('siteTitle')}`} />
        <HeroSection
          verticalLayout
          image={
            <Avatar
              outerWrapperClassName="gatsbyImageWrapper"
              title="avatar"
              alt="Anna Dejewska's photo"
              sizes={meImage.childImageSharp.fluid}
            />
          }>
          <PageTitle>{t('aboutMePage.pageTitle')}</PageTitle>
        </HeroSection>
        <AboutPageBody />
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
    meImage: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
