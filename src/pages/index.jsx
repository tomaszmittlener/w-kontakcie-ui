import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Particles from 'react-particles-js'

import {compose} from 'src/utils'
import {withLocales, withLocalesContextProvider} from 'src/context'
import styled from 'styled-components'
import Layout from 'src/layout'
import {
  SEO,
  AboutMeSection,
  ArticlesExcerpts,
  PageSectionTitle,
  PageSection,
  Intro,
  OfferSection,
} from 'src/components'
import {
  articlesExcerptsPropTypesShape,
  articlesImagesPropTypesShape,
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'

import config from '../../data/SiteConfig'
import particlesConfig from '../../data/particlesjs-config'

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({theme: {layers}}) => layers.bottom};
  //height: 100%;
`


// about me
const AboutMeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
// offer

const ArticlesWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    max-width: 1000px;
  }
  > figure {
    flex: 1;
  }
`

class Index extends React.Component {
  render() {
    const {
      t,
      location,
      data: {meImage, articlesExcerpts, articlesImages},
    } = this.props
    return (
      <Layout location={location} withTopPadding hideLogo>
        <StyledParticles params={particlesConfig} />
        <Helmet title={config.siteTitle} />
        <SEO />
        <PageSection>
          <Intro />
        </PageSection>
        <PageSection dark>
          <AboutMeContainer>
            <PageSectionTitle>O mnie</PageSectionTitle>
            <AboutMeSection meImage={meImage} />
          </AboutMeContainer>
        </PageSection>
        <PageSection>
          <PageSectionTitle>Oferta</PageSectionTitle>
          <OfferSection />
        </PageSection>
        <PageSection dark>
          <PageSectionTitle>Artykuły</PageSectionTitle>
          <ArticlesWrapper>
            <ArticlesExcerpts
              articlesExcerpts={articlesExcerpts}
              articlesImages={articlesImages}
            />
          </ArticlesWrapper>
        </PageSection>
      </Layout>
    )
  }
}

Index.propTypes = {
  location: locationPropTypesShape.isRequired,
  data: PropTypes.shape({
    meImage: imageFluidPropTypesShape.isRequired,
    articlesExcerpts: articlesExcerptsPropTypesShape.isRequired,
    articlesImages: articlesImagesPropTypesShape.isRequired,
  }).isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(Index)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    meImage: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    articlesExcerpts: allMarkdownRemark(
      limit: 2
      sort: {fields: [fields___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          fields {
            date
            slug
            directory
          }
          id
          timeToRead
          excerpt
          frontmatter {
            title
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
