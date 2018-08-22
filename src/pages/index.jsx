import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from 'src/layout'
import Particles from 'react-particles-js'
import {
  SEO,
  AboutMe,
  ArticlesExcerpts,
  H3,
  ParagraphText,
  PageSectionTitle,
  PageSection,
} from 'src/components'
import {
  articlesExcerptsPropTypesShape,
  articlesImagesPropTypesShape,
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'
import config from '../../data/SiteConfig'
import particlesConfig from '../../data/particlesjs-config'

const ImageContainer = styled.section`
  height: 475px;
`

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
const AboutMeSection = PageSection.extend`
  background-color: ${({theme: {colors}}) => colors.third};

`
const AboutMeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
// offer
const OfferSection = PageSection.extend``

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

const ArticlesSection = PageSection.extend`
  background-color: ${({theme: {colors}}) => colors.third};
`

class Index extends React.Component {
  render() {
    const {
      location,
      data: {bgImage, meImage, articlesExcerpts, articlesImages},
    } = this.props
    return (
      <Layout location={location}>
        <Helmet title={config.siteTitle} />
        <SEO />
        <StyledParticles params={particlesConfig} />
        <ImageContainer
          title="Home page cover photo"
          alt="Long bridge at the sea in the sunset"
          fluid={bgImage.childImageSharp.fluid}
        />
        <AboutMeSection>
          <AboutMeContainer>
            <PageSectionTitle>O mnie</PageSectionTitle>
            <AboutMe meImage={meImage} />
          </AboutMeContainer>
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
        <ArticlesSection>
          <PageSectionTitle>Artykuły</PageSectionTitle>
          <ArticlesWrapper>
            <ArticlesExcerpts
              articlesExcerpts={articlesExcerpts}
              articlesImages={articlesImages}
            />
          </ArticlesWrapper>
        </ArticlesSection>
      </Layout>
    )
  }
}

Index.propTypes = {
  location: locationPropTypesShape.isRequired,
  data: PropTypes.shape({
    bgImage: imageFluidPropTypesShape.isRequired,
    meImage: imageFluidPropTypesShape.isRequired,
    articlesExcerpts: articlesExcerptsPropTypesShape.isRequired,
    articlesImages: articlesImagesPropTypesShape.isRequired,
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
