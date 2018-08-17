import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import config from '../../data/SiteConfig'

class CoachingPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <Fragment>
          <Helmet title={`Coaching | ${config.siteTitle}`} />
        </Fragment>
      </Layout>
    )
  }
}

CoachingPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default CoachingPage
