import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import About from 'src/components/About/About'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import config from '../../data/SiteConfig'

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <Fragment>
          <Helmet title={`O mnie | ${config.siteTitle}`} />
          <About />
        </Fragment>
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default AboutPage
