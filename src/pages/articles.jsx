import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {H1} from 'src/components'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import config from '../../data/SiteConfig'

class ArticlesPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Artykuły | ${config.siteTitle}`} />
        <H1>Artykuły</H1>
      </Layout>
    )
  }
}

ArticlesPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default ArticlesPage
