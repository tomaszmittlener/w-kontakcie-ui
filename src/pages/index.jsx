import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'

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
        <Helmet title={config.siteTitle} />
        <SEO />
        <PageSection>
          <Intro />
        </PageSection>
        <PageSection dark>
          <AboutMeContainer>
            <PageSectionTitle>
              {t('mainPage.aboutMeSectionTitle')}
            </PageSectionTitle>
            <AboutMeSection meImage={meImage} />
          </AboutMeContainer>
        </PageSection>
        <PageSection>
          <PageSectionTitle>{t('mainPage.offerSectionTitle')}</PageSectionTitle>
          <OfferSection />
        </PageSection>
        <PageSection dark>
          <PageSectionTitle>
            {t('mainPage.articlesSectionTitle')}
          </PageSectionTitle>
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
        fluid(maxWidth: 400, maxHeight: 400) {
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
