import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import React from 'react'
import {ms} from 'src/utils'

const Wrapper = styled.figure`
  width: 100%;
  height: 100%;
  max-width: ${({maxWidth}) => maxWidth}px;
`

const HeroImage = ({maxWidth, ...props}) => (
  <Wrapper maxWidth={maxWidth}>
    <Img {...props} />
  </Wrapper>
)

HeroImage.propTypes = {
  maxWidth: PropTypes.number,
}

HeroImage.defaultProps = {
  maxWidth: 300,
}

export default HeroImage
