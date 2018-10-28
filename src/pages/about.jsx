import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {compose, ms} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {graphql} from 'gatsby'
import {
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'
import {
  H1,
  H2,
  H4,
  HeroSection,
  PageNavigation,
  ParagraphText,
  SectionContent,
  SectionLayout,
} from 'src/components'
import {AboutPageBody} from 'src/containers'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {MaxWidthText, StyledFirstLetter} from 'src/layout/mixins'
import {
  ABOUT_ME_SECTION,
  ABOUT_COMPETENCES_SECTION,
  ABOUT_EXPERIENCE_SECTION,
} from 'src/constants/SectionNames'

const PageTitle = styled(H1)`
  //text-align: center;
`
const Avatar = styled(Img)`
  width: 300px;
  height: 100%;
`
const NameText = styled(H2)`
  font-weight: bold;
  //text-align: center;
  margin: ${ms(0)} 0 ${ms(0)} 0;
  text-align: center;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
  }
`
const ParagraphSectionContent = styled.article`
  ${StyledFirstLetter};

  ${({theme: {mq}}) => mq.desktop} {
    margin: 0 0 0 ${ms(8)};
  }
`
const ProfessionText = styled(H4)`
  font-size: ${ms(1)};
  text-align: center;
  font-weight: bold;

  margin: 0 0 ${ms(5)} 0;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
  }
`

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
  }
`

const linksData = [
  {
    to: ABOUT_ME_SECTION,
    name: 'Anna Dejewska',
  },
  {
    to: ABOUT_COMPETENCES_SECTION,
    name: 'Kompetencje',
  },
  {
    to: ABOUT_EXPERIENCE_SECTION,
    name: 'Doświadczenie',
  },
]

const HeroImage = styled(Img)`
  height: 100%;
  width: 300px;
  margin: 0 auto;
  opacity: 0.4;
`

class AboutPage extends Component {
  render() {
    console.log(this.props)
    const {
      data: {meImage, heroImage},
      config,
      t,
    } = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`O mnie | ${config('siteTitle')}`} />
        <HeroSection
          image={
            <HeroImage
              outerWrapperClassName="gatsbyImageWrapper"
              title="hand image"
              alt="hand image"
              sizes={heroImage.childImageSharp.fluid}
            />
          }>
          <PageTitle>{t('aboutMePage.pageTitle')}</PageTitle>
          <PageNavigation linksData={linksData} />
        </HeroSection>
        <AboutPageBody meImage={meImage} />
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  config: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    meImage: imageFluidPropTypesShape.isRequired,
  }).isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(AboutPage)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AboutPageQuery {
    heroImage: file(relativePath: {eq: "book.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meImage: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
