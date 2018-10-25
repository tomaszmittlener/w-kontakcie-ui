import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import sal from 'sal.js'
import {compose, ms} from 'src/utils'
import {withLocales, withLocalesContextProvider} from 'src/context'
import styled from 'styled-components'
import Layout from 'src/layout'
import {NavLink} from 'react-router-dom'
import {
  SEO,
  SectionLayout,
  SectionContent,
  H1,
  ParagraphText,
  PageBodyHome,
  Button,
  Pattern,
  HeroSection
} from 'src/components'
import {
  articlesExcerptsPropTypesShape,
  articlesImagesPropTypesShape,
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'

import config from '../../data/SiteConfig'

const HeroParagraph = styled(ParagraphText)`
  font-size: ${ms(5)};
  line-height: ${ms(5)};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const StyledButton = styled(Button)`
  padding: ${ms(2)} ${ms(7)};
`
const HeroSectionContent = styled(SectionContent)`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
  }
`

const HeroTextSection = styled.div`
  width: 100%;
  ${({theme: {mq}}) => mq.desktop} {
    width: 66%;
  }
`

const HeroIllustrationSection = styled.div`
  width: 100%;
  max-width: ${ms(17)};
  display: flex;
  justify-content: center;
  margin: ${ms(8)} 0 0 0;
  position: relative;
  > svg {
    z-index: ${({theme: {layers}}) => layers.topBottom};  
  }
  
  &:before {
    background-color: ${({theme: {colors}}) => colors.canvas};
    bottom: 0;
    content: '';
    height: 50%;
    position: absolute;
    width: 100vw;
  }

  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    width: 33%;
    margin: 0 0 0 ${ms(4)};

    &:before {
      content: unset;
    }

`

class Index extends React.Component {
  render() {
    const {t, location} = this.props
    return (
      <Layout location={location} withTopPadding hideLogo>
        <Helmet title={config.siteTitle} />
        <SEO />
        <HeroSection image={<Pattern />}>
          <H1>{t('company.name')}</H1>
          <HeroParagraph>{t('company.type')}</HeroParagraph>
          <StyledButton to="/contact">Kontakt</StyledButton>
        </HeroSection>
        <PageBodyHome />
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
