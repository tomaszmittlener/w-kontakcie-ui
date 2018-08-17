import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {H1, PostListing} from 'src/components'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import config from '../../data/SiteConfig'

class ArticlesPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Artykuły | ${config.siteTitle}`} />
        <H1>Artykuły</H1>
        <PostListing postEdges={postEdges} />
      </Layout>
    )
  }
}

ArticlesPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default ArticlesPage

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ArticlesPageQuery {
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
