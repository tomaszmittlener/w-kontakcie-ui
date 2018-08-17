import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {H1} from 'src/components'
import config from '../../data/SiteConfig'

class TherapyPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Terapia | ${config.siteTitle}`} />
        <H1>Terapia</H1>
      </Layout>
    )
  }
}

TherapyPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default TherapyPage
