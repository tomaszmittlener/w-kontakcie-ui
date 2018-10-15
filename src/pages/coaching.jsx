import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {compose} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {PageBodyCoaching} from 'src/components'

class CoachingPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Coaching | ${this.props.config('siteTitle')}`} />
        <PageBodyCoaching />
      </Layout>
    )
  }
}

CoachingPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(CoachingPage)
