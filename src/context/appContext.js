import React from 'react'
import theme from 'src/layout/theme'
import PropTypes from 'prop-types'
import {breakpointsPropTypesShape} from 'src/utils/PropTypes'
import withBreakpoints from 'src/utils'

export const AppContext = React.createContext()

class AppContextProvider extends React.Component {
  state = {
    theme,
    isMenuOpen: false,
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const isMobile =
      !nextProps.breakpoints.isMobile || !nextProps.breakpoints.isTablet
    isMobile && this.state.isMenuOpen && this.setState({isMenuOpen: false})
  }

  toggleMenuOpen = () => {
    const {
      breakpoints: {isMobile, isTablet},
    } = this.props
    if (isTablet || isMobile) {
      this.setState(prevState => ({isMenuOpen: !prevState.isMenuOpen}))
    }
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          toggleMenuOpen: this.toggleMenuOpen,
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.any,
  breakpoints: breakpointsPropTypesShape.isRequired,
}

AppContextProvider.defaultProps = {
  children: '',
}

export default withBreakpoints(AppContextProvider)

export const contextPropTypesShape = PropTypes.shape({
  theme: PropTypes.object.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenuOpen: PropTypes.func.isRequired,
})

export function withAppContext(Component) {
  return function ThemedComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    )
  }
}
