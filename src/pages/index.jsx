import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import {
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'

import {compose, ms} from 'src/utils'
import {withLocales, withLocalesContextProvider} from 'src/context'

import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {H1, H3, Button, HeroSection, HeroImage} from 'src/components'
import {HomePageBody} from 'src/containers'
import config from '../../data/SiteConfig'

const IMAGE_WIDTH = 400

const StyledButton = styled(Button)`
  padding: ${ms(2)} ${ms(7)};
  margin: ${ms(1)} 0 0 0;
  display: none;
  ${({theme: {mq}}) => mq.desktop} {
    display: inline-block;
  }
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
        <HeroSection
          image={
            <HeroImage
              maxWidth={IMAGE_WIDTH}
              outerWrapperClassName="__image-outer-wrapper"
              innerWrapperClassName="__image-inner-wrapper"
              title="hand image"
              alt="Home "
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
    heroImage: imageFluidPropTypesShape.isRequired,
  }).isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(Index)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    heroImage: file(relativePath: {eq: "main_hero.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
