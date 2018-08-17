import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import About from 'src/components/About/About'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {LocalesContext} from 'src/context'

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <LocalesContext.Consumer>
          {({config}) => (
            <Fragment>
              <Helmet title={`O mnie | ${config('siteTitle')}`} />
              <About />
            </Fragment>
          )}
        </LocalesContext.Consumer>
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default AboutPage
