import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {H1} from 'src/components'
import config from '../../data/SiteConfig'

class OnlineHelpPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Pomoc Online | ${config.siteTitle}`} />
        <H1>Pomoc Online</H1>
      </Layout>
    )
  }
}

OnlineHelpPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default OnlineHelpPage
