import React from 'react'
import {contextPropTypesShape, withAppContext} from 'src/context'

const Header = ({context: {toggleMenuOpen}}) => (
  <div>
    <button onClick={toggleMenuOpen}>open menu</button>
    header
  </div>
)

Header.propTypes = {
  context: contextPropTypesShape.isRequired,
}

export default withAppContext(Header)
