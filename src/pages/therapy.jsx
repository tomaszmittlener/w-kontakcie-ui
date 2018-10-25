import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {compose, ms} from 'src/utils'
import styled from 'styled-components'
import {withLocales, withLocalesContextProvider} from 'src/context'
import {H1, PageBodyTherapy, HeroSection, Pattern} from 'src/components'
import config from '../../data/SiteConfig'

const PageTitle = styled(H1)`
  text-align: center;
`

class TherapyPage extends Component {
  render() {
    const {t} = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Psychoterapia | ${config.siteTitle}`} />
        <HeroSection image={<Pattern />} verticalLayout>
          <PageTitle>{t('therapyPage.pageTitle')}</PageTitle>
        </HeroSection>
        <PageBodyTherapy />
      </Layout>
    )
  }
}

TherapyPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(TherapyPage)
