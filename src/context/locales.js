import React from 'react'
import PropTypes from 'prop-types'
import Locales from '../../data/SiteLocales'

export const LocalesContext = React.createContext()

const LocalesContextProvider = ({children}) => (
  <LocalesContext.Provider value={Locales}>{children}</LocalesContext.Provider>
)

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
        {localesContext => <Component {...props} locales={localesContext} />}
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
