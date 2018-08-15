import React, {Component} from 'react'
import UserLinks from '../UserLinks/UserLinks'
import config from '../../../data/SiteConfig'

class Index extends Component {
  render() {
    const {copyright} = config
    if (!copyright) {
      return null
    }
    return (
      <footer>
        <UserLinks config={config} labeled />
        <div>
          <h4>{copyright}</h4>
        </div>
      </footer>
    )
  }
}

export default Index
