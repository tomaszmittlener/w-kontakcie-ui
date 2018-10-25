import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {compose, ms} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {H1, HeroSection, Pattern} from 'src/components'
import {CoachingPageBody} from 'src/containers'

class CoachingPage extends Component {
  render() {
    const {t, config, location} = this.props
    return (
      <Layout location={location} withTopPadding>
        <Helmet title={`Coaching | ${config('siteTitle')}`} />
        <HeroSection image={<Pattern />}>
          <H1>{t('coachingPage.pageTitle')}</H1>
        </HeroSection>
        <CoachingPageBody />
      </Layout>
    )
  }
}

CoachingPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  config: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(CoachingPage)
