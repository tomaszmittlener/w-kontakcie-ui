import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import React from 'react'

const Wrapper = styled.figure`
  width: 100%;
  height: 100%;
  margin: 0;
  max-width: ${({maxWidth}) => maxWidth * 0.8}px;
  ${({theme: {mq}}) => mq.desktopL} {
    max-width: ${({maxWidth}) => maxWidth}px;
  }
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
