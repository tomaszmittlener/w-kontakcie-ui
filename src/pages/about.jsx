import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {compose} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {PageBodyAboutMe} from 'src/components'
import {graphql} from 'gatsby'
import {
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'

class AboutPage extends Component {
  render() {
    const {
      data: {meImage},
      config,
    } = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`O mnie | ${config('siteTitle')}`} />
        <PageBodyAboutMe meImage={meImage} />
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  config: PropTypes.func.isRequired,
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
    meImage: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
