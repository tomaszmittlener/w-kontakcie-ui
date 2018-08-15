import React, {Component} from 'react'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import About from 'src/components/About/About'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import config from '../../data/SiteConfig'

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default AboutPage
