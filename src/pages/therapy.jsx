import React, {Component} from 'react'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {PageBodyTherapy} from 'src/components'
import {compose} from 'src/utils'
import {withLocalesContextProvider} from 'src/context'
import config from '../../data/SiteConfig'

class TherapyPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Psychoterapia | ${config.siteTitle}`} />
        <PageBodyTherapy />
      </Layout>
    )
  }
}

TherapyPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default compose(withLocalesContextProvider)(TherapyPage)
