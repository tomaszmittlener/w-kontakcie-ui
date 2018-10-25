import React, {Fragment} from 'react'
import {Transition as ReactTransition} from 'react-transition-group'
import getTransitionStyle from 'src/utils/getTransitionStyle'
import {historyExitingEventType, timeout} from '../../../gatsby-browser'

class Transition extends React.Component {
  static getDerivedStateFromProps({exiting}) {
    if (exiting) {
      return {exiting: false}
    }
    return null
  }
  constructor(props) {
    super(props)
    this.state = {exiting: false}
    this.listenerHandler = this.listenerHandler.bind(this)
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler)
  }

  listenerHandler(event) {
    this.setState({exiting: true})
  }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      appear: true,
      in: !this.state.exiting,
    }
    const childrenWithProps = status =>
      React.Children.map(this.props.children, child =>
        React.cloneElement(child, {
          style: {
            ...getTransitionStyle({status, timeout}),
          },
        }),
      )
    return (
      <ReactTransition {...transitionProps}>
        {status => childrenWithProps(status)}
      </ReactTransition>
    )
  }
}

export default Transition
