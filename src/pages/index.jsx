import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

const Logo = styled(Img)`
  max-height: 200px;
  width: 200px;
  height: 100%;
`

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location}>
        <Fragment>
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
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
  }
`
