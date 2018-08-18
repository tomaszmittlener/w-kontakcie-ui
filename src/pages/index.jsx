import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import AboutMeSection from 'src/components/AboutMe'
import Layout from 'src/layout'
import {SEO} from 'src/components'
import {
  ImageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'
import config from '../../data/SiteConfig'

const ImageContainer = styled(Img)`
  height: 475px;
  z-index: ${({theme: {layers}}) => layers.bottom};
`

class Index extends React.Component {
  render() {
    const {
      location,
      data: {picture},
    } = this.props
    return (
      <Layout location={location}>
        <Fragment>
          <Helmet title={config.siteTitle} />
          <SEO />
          <ImageContainer fluid={picture.childImageSharp.fluid} />
          <AboutMeSection />
        </Fragment>
      </Layout>
    )
  }
}

Index.propTypes = {
  location: locationPropTypesShape.isRequired,
  data: PropTypes.shape({
    picture: ImageFluidPropTypesShape.isRequired,
  }).isRequired,
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    picture: file(relativePath: {eq: "background.jpg"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(
          maxWidth: 1920
          maxHeight: 475 #          duotone: {highlight: "#f00e2e", shadow: "#192550", opacity: 50}
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
