import React from 'react'
import PropTypes from 'prop-types'
import {
  locationPropTypesShape,
  pageContextPropTypesShape,
} from 'src/utils/PropTypes'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from 'src/layout'
import Img from 'gatsby-image'
import styled from 'styled-components';
import {UserInfo, SEO, PostTags, MarkdownAST} from 'src/components'
import config from '../../data/SiteConfig'

const ImageContainer = styled(Img)`
  height: 475px;
  z-index: ${({theme: {layers}}) => layers.bottom};
`

export default class PostTemplate extends React.Component {
  render() {
    const {
      pageContext: {slug},
      data: {
        markdownRemark: postNode,
        markdownRemark: {frontmatter: post},
      },
    } = this.props
    const image = {
      aspectRatio: 4.033613445378151,
      base64: '',
      sizes: '(max-width: 1920px) 100vw, 1920px',
      src: post.cover,
      srcSet: '',
    }
    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article>
          <ImageContainer

            fluid={image}
          />
          <h1>{post.title}</h1>
          <MarkdownAST htmlAst={postNode.htmlAst} />

          <PostTags tags={post.tags} />
          <UserInfo />
        </article>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: locationPropTypesShape.isRequired,
  pageContext: pageContextPropTypesShape.isRequired,
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      htmlAst
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
    picture: file(relativePath: {eq: "cover.jpg"}) {
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
