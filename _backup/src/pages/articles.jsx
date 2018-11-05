import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../../../src/layout'
import {ArticlesExcerpts, PageSectionTitle, PageSection} from '../../../src/components'
import {compose} from '../../../src/utils'
import {withLocales, withLocalesContextProvider} from '../../../src/context'
import {rgba} from 'polished'
import {
  articlesExcerptsPropTypesShape,
  locationPropTypesShape,
  imageFluidPropTypesShape,
} from '../../../src/utils/PropTypes'

import {graphql} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import config from '../../../data/SiteConfig'

const ImageContainer = styled(Img)`
  height: 475px;
`

const ArticlesContainer = PageSection.extend`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  figure:nth-of-type(odd) {
    background: ${({theme: {colors}}) => rgba(colors.secondary, 0.2)};
  }
  ${({theme: {mq}}) => mq.desktop} {
    figure:nth-of-type(even) {
      border: 2px solid ${({theme: {colors}}) => rgba(colors.secondary, 0.2)};
    }
  }
`

const StyledPageSectionTitle = styled(PageSectionTitle)``

class ArticlesPage extends Component {
  render() {
    const {
      location,
      data: {bgImage, articlesExcerpts, articlesImages},
    } = this.props
    return (
      <Layout location={location}>
        <Helmet title={`Artykuły | ${config.siteTitle}`} />
        <ImageContainer
          title="Home page cover photo"
          alt="Long bridge at the sea in the sunset"
          fluid={bgImage.childImageSharp.fluid}
        />
        <ArticlesContainer>
          <StyledPageSectionTitle>Artykuły</StyledPageSectionTitle>
          <ArticlesExcerpts
            articlesExcerpts={articlesExcerpts}
            small
            articlesImages={articlesImages}
          />
        </ArticlesContainer>
      </Layout>
    )
  }
}

ArticlesPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  data: PropTypes.shape({
    bgImage: imageFluidPropTypesShape.isRequired,
    articlesExcerpts: articlesExcerptsPropTypesShape.isRequired,
  }).isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(ArticlesPage)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ArticlesPageQuery {
    bgImage: file(relativePath: {eq: "articles-background.jpg"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1920, cropFocus: NORTHEAST) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    articlesExcerpts: allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
            date
            directory
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
    articlesImages: allFile(filter: {name: {eq: "cover"}}) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
