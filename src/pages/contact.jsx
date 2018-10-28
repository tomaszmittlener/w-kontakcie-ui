import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import styled from 'styled-components'
import {compose, ms} from 'src/utils'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {H1, Link, HeroSection, Pattern, HeroQuote} from 'src/components'
import {withLocales, withLocalesContextProvider} from 'src/context'
import {ContactPageBody} from 'src/containers'
import Img from 'gatsby-image'

const HeroQuoteParagraph = styled.p`
  font-size: ${ms(3)};
  line-height: ${ms(3.5)};
  margin: 0 0 ${ms(0)} 0;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
`

const HeroImage = styled(Img)`
  height: 100%;
  width: 300px;
  margin: 0 auto;
  opacity: 0.4;
`

class ContactPage extends Component {
  render() {
    const {
      t,
      config,
      data: {heroImage},
    } = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Kontakt | ${config.siteTitle}`} />
        <HeroSection
          image={
            <HeroImage
              outerWrapperClassName="gatsbyImageWrapper"
              title="hand image"
              alt="hand image"
              sizes={heroImage.childImageSharp.fluid}
            />
          }>
          <H1>Kontakt</H1>
          <HeroQuoteParagraph>
            tel: <Link to={`tel:${t('owner.phone')}`}>{t('owner.phone')}</Link>
          </HeroQuoteParagraph>
          <HeroQuoteParagraph>
            email:{' '}
            <Link to={`mailto:${t('owner.email')}`}>{t('owner.email')}</Link>
          </HeroQuoteParagraph>
        </HeroSection>
        <ContactPageBody />
      </Layout>
    )
  }
}

ContactPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  config: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(ContactPage)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ContactPageQuery {
    heroImage: file(relativePath: {eq: "book.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
