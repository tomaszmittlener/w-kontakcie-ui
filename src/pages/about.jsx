import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import About from 'src/components/About/About'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {compose} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`O mnie | ${this.props.config('siteTitle')}`} />
        <About />
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(AboutPage)
