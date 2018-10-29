import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {compose, ms} from 'src/utils'
import {withLocales, withLocalesContextProvider} from 'src/context'
import styled from 'styled-components'
import Layout from 'src/layout'
import {
  SEO,
  H1,
  H3,
  Button,
  Pattern,
  HeroSection,
  Logo,
  HeroImage,
} from 'src/components'
import {HomePageBody} from 'src/containers'

import {
  articlesExcerptsPropTypesShape,
  articlesImagesPropTypesShape,
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'

import config from '../../data/SiteConfig'

const StyledButton = styled(Button)`
  padding: ${ms(2)} ${ms(7)};
  margin: ${ms(1)} 0 0 0;
  display: none;
  ${({theme: {mq}}) => mq.desktop} {
    display: inline-block;
  }
`
const StyledLogo = styled(props => <Logo {...props} />)`
  width: 100%;
`

class Index extends React.Component {
  render() {
    const {
      t,
      location,
      data: {heroImage},
    } = this.props
    return (
      <Layout location={location} withTopPadding hideLogo>
        <Helmet title={config.siteTitle} />
        <SEO />
        <HeroSection
          image={
            <HeroImage
              outerWrapperClassName="gatsbyImageWrapper"
              title="hand image"
              alt="hand image"
              sizes={heroImage.childImageSharp.fluid}
            />
          }>
          <H1>{t('company.name')}</H1>
          <H3>{t('company.type')}</H3>
          <StyledButton to="/contact">Kontakt</StyledButton>
        </HeroSection>
        <HomePageBody />
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
    heroImage: file(relativePath: {eq: "people.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meImage: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
