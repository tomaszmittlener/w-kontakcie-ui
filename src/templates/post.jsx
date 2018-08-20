import React from 'react'
import PropTypes from 'prop-types'
import {
  locationPropTypesShape,
  pageContextPropTypesShape,
} from 'src/utils/PropTypes'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from 'src/layout'
import styled from 'styled-components'
import {rgba} from 'polished'
import {
  UserInfo,
  SEO,
  PostTags,
  MarkdownAST,
  PageSection,
  Image,
  H1,
} from 'src/components'
import {ms} from 'src/utils'
import config from '../../data/SiteConfig'

const CoverImage = styled(Image)`
  height: 475px;
  z-index: ${({theme: {layers}}) => layers.bottom};
`

const ArticleSection = styled(PageSection)`
  max-width: 1000px;
  margin: 0 auto;
`

const Article = styled.article`
  max-width: 80ch;
  margin: 0 auto;
  padding: 0 ${ms(1)};
  & > p:first-of-type {
    padding: ${ms(5)} 0 0 0;
    &:first-letter {
      float: left;
      margin-right: 10px;
      margin-left: -5px;
      margin-top: 5px;
      line-height: 0.73em;
      font-size: 5.5em;
      font-weight: 800;
      color: ${({theme: {colors}}) => colors.secondary};
      font-family: ${({
        theme: {
          typo: {fontFamily},
        },
      }) => fontFamily.secondary};
    }
  }

  blockquote {
    margin: ${ms(7)};
    text-align: justify;

    font-style: italic;
    & > :last-child {
      margin-bottom: 0;
    }
    &:before {
      content: '\\201C';
      font-size: ${ms(8)};
      line-height: 0;
      float: left;
      margin-left: -${ms(3)};
      margin-top: ${ms(-1)};
      color: ${({theme: {colors}}) => rgba(colors.primary, 0.4)};
    }
    &:after {
      content: '\\201D';
      font-size: ${ms(8)};
      line-height: 0;
      float: right;
      margin-right: -${ms(-8)};
      margin-top: ${ms(3.9)};
      color: ${({theme: {colors}}) => rgba(colors.primary, 0.4)};
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
`

const MainTitle = styled(H1)`
  position: absolute;
  top: 20px;
  font-weight: bold;
  padding: ${ms(0)};
  //text-shadow: 89px 70px #ffffff;
  font-size: ${ms(4)};
  line-height: ${ms(4)};
  background-color: ${({theme: {colors}}) => rgba(colors.canvas, 0.4)};
  width: 100%;
  ${({theme: {mq}}) => mq.tablet} {
    top: 100px;
  }
  ${({theme: {mq}}) => mq.desktop} {
    top: 50%;
    font-size: ${ms(8)};
    line-height: ${ms(8)};
  }
`

export default class PostTemplate extends React.Component {
  render() {
    const {
      pageContext: {slug},
      data: {
        markdownRemark: postNode,
        markdownRemark: {frontmatter: post},
      },
      location,
    } = this.props
    return (
      <Layout location={location} withTopPadding>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <ImageContainer>
          <CoverImage
            title="Article cover image"
            alt={`cover image of "${post.title}" article`}
            src={post.cover}
          />
          <MainTitle>{post.title}</MainTitle>
        </ImageContainer>
        <ArticleSection>
          <Article>
            <MarkdownAST htmlAst={postNode.htmlAst} />
          </Article>
          <UserInfo />
          Podobna tematyka:
          <PostTags tags={post.tags} />
        </ArticleSection>
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
