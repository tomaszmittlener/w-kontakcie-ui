import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import AboutMeSection from 'src/components/AboutMe'
import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

const ImageContainer = styled(Img)`
  height: 475px;
  z-index: ${({theme: {layers}}) => layers.bottom};
`

class Index extends React.Component {
  render() {
    console.log(this.props)

    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location}>
        <Fragment>
          <Helmet title={config.siteTitle} />
          <SEO />
          <ImageContainer
            sizes={this.props.data.picture.childImageSharp.fixed}
          />
          <AboutMeSection />
        </Fragment>
      </Layout>
    )
  }
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___date], order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    picture: file(relativePath: {eq: "background2.jpg"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(
          width: 1920 #          duotone: {highlight: "#f00e2e", shadow: "#192550", opacity: 50}
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
