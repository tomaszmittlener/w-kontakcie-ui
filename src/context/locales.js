import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Locales from '../../data/SiteLocales'
import Config from '../../data/SiteConfig'

export const LocalesContext = React.createContext()

class LocalesContextProvider extends React.Component {
  getNestedProp = (nestedObj, stringKey) => {
    const pathArr = stringKey.split('.')
    return pathArr.reduce(
      (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
      nestedObj,
    )
  }

  t = key => this.getNestedProp(Locales, key)
  config = key => this.getNestedProp(Config, key)

  render() {
    const values = {
      t: key => this.t(key),
      config: key => this.config(key),
    }
    return (
      <LocalesContext.Provider value={values}>
        {this.props.children}
      </LocalesContext.Provider>
    )
  }
}

LocalesContextProvider.propTypes = {
  children: PropTypes.any,
}

LocalesContextProvider.defaultProps = {
  children: '',
}

export function withLocales(Component) {
  return function ThemedComponent(props) {
    return (
      <LocalesContext.Consumer>
        {localesContext => <Component {...props} {...localesContext} />}
      </LocalesContext.Consumer>
    )
  }
}

export function withLocalesContextProvider(Component) {
  return function ThemedComponent(props) {
    return (
      <LocalesContextProvider>
        <Component {...props} />
      </LocalesContextProvider>
    )
  }
}
