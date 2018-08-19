import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from 'src/layout'
import {
  SEO,
  AboutMe,
  ArticlesExcerpts,
  H1,
  H3,
  ParagraphText,
  PageSectionTitle,
  PageSection,
} from 'src/components'
import {
  articlesExcerptsPropTypesShape,
  ImageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'
import config from '../../data/SiteConfig'

const ImageContainer = styled(Img)`
  height: 475px;
  z-index: ${({theme: {layers}}) => layers.bottom};
`


// about me
const AboutMeSection = PageSection.extend`
  max-width: 1000px;
  margin: 0 auto;
`

// articles
// const ArticlesSection = Section.extend``

// offer
const OfferSection = PageSection.extend`
  background-color: ${({theme: {colors}}) => colors.third};
`

const ArticlesWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    max-width: 1000px;
  }
`

const Article = styled.article`
  max-width: 1000px;
  margin: 0 auto;
`

class Index extends React.Component {
  render() {
    const {
      location,
      data: {bgImage, meImage, articlesExcerpts},
    } = this.props
    return (
      <Layout location={location}>
        <Helmet title={config.siteTitle} />
        <SEO />
        <ImageContainer
          title="Home page cover photo"
          alt="Long bridge at the sea in the sunset"
          fluid={bgImage.childImageSharp.fluid}
        />
        <AboutMeSection>
          <PageSectionTitle>O mnie</PageSectionTitle>
          <AboutMe meImage={meImage} />
        </AboutMeSection>
        <OfferSection>
          <PageSectionTitle>Oferta</PageSectionTitle>
          <Article>
            <H3>Konsultacja psychologiczna</H3>
            <ParagraphText>
              Zwykle od jednego do trzech spotkań, w trakcie których można
              określić charakter zgłaszanych problemów oraz wybrać odpowiednią
              formę pomocy tj. psychoterapię indywidualną, grupową, wsparcie
              psychologiczne czy dodatkowo konsultację psychiatryczną.
            </ParagraphText>
            <H3>Psychoterapia indywidualna</H3>
            <ParagraphText>
              Rozpoczęcie psychoterapii poprzedzone jest konsultacją, która
              pozwala na rozeznanie się w trudnościach i podjęciu najlepszej
              formy pomocy. Praca terapeutyczna opiera się na cyklu
              systematycznych spotkań, które odbywają się raz lub dwa razy w
              tygodniu. Psychoterapia to forma pomocy dostosowana do potrzeb
              pacjenta, mająca na celu trwałe zmiany w funkcjonowaniu danej
              osoby oraz poprawę jakości jej życia. Psychoterapia polega na
              szczególnej formie rozmowy, o określonych zasadach i warunkach,
              które zostają ustalone na początku kontaktu.{' '}
            </ParagraphText>
          </Article>
        </OfferSection>
        <PageSection>
          <PageSectionTitle>Artykuły</PageSectionTitle>
          <ArticlesWrapper>
            <ArticlesExcerpts articlesExcerpts={articlesExcerpts} />
          </ArticlesWrapper>
        </PageSection>
      </Layout>
    )
  }
}

Index.propTypes = {
  location: locationPropTypesShape.isRequired,
  data: PropTypes.shape({
    bgImage: ImageFluidPropTypesShape.isRequired,
    meImage: ImageFluidPropTypesShape.isRequired,
    articlesExcerpts: articlesExcerptsPropTypesShape.isRequired,
  }).isRequired,
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    bgImage: file(relativePath: {eq: "background.jpg"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(
          maxWidth: 1920
          maxHeight: 475 #                      duotone: {highlight: "#f00e2e", shadow: "#192550", opacity: 50}
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
          }
          id
          timeToRead
          excerpt
          frontmatter {
            title
            cover
          }
        }
      }
    }
  }
`
