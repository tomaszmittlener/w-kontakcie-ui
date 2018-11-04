import React, {Component} from 'react'
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import styled from 'styled-components'
import {compose, ms} from 'src/utils'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {H1, Link, HeroSection, HeroImage} from 'src/components'
import {withLocales, withLocalesContextProvider} from 'src/context'
import {ContactPageBody} from 'src/containers'

const IMAGE_WIDTH = 400
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


class ContactPage extends Component {
  render() {
    const {
      t,
      config,
      data: {heroImage},
    } = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Kontakt | ${config('siteTitle')}`} />
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
    heroImage: file(relativePath: {eq: "contact_hero.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
