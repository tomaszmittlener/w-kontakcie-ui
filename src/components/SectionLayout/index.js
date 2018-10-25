import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms} from 'src/utils/index'

const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${ms(25.5)};
  padding: 0 ${ms(2)};
  width: 100%;
`

const SectionLayout = ({className, children}) => (
  <Layout className={className}>{children}</Layout>
)

SectionLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

SectionLayout.defaultProps = {
  className: '',
}

export default SectionLayout
