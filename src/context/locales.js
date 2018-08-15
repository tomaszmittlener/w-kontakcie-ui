import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Locales from '../../data/SiteLocales'

export const LocalesContext = React.createContext()

class LocalesContextProvider extends React.Component {
  t = key => get(Locales, key)
  render() {
    return (
      <LocalesContext.Provider
        value={this.t}>
        {this.props.children}
      </LocalesContext.Provider>
    );
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
        {localesContext => <Component {...props} t={localesContext} />}
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
