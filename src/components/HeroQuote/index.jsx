import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ms} from 'src/utils'
import {H4} from 'src/components'
import GeometricPatternPNG from 'src/components/Images/GeometricPattern.png'

const QuoteParagraph = styled.figure`
  position: relative;
  height: 350px;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &:before {
    content: '';
    background-image: url(${({backgroundImage}) => backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`
const QuoteText = styled(H4)`
  text-align: center;
  font-style: italic;
  font-weight: bold;
  margin: 0 auto;
  opacity: 0.7;
  color: ${({theme: {colors}}) => colors.secondary};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`
const QuoteAuthor = styled.span`
  text-align: right;
  margin: ${ms(2)};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

class HeroQuote extends React.PureComponent {
  render() {
    const {quoteText, quoteAuthor, backgroundImage} = this.props
    return (
      <QuoteParagraph backgroundImage={backgroundImage}>
        <QuoteText />
        {quoteAuthor && <QuoteAuthor>{quoteAuthor}</QuoteAuthor>}
      </QuoteParagraph>
    )
  }
}

HeroQuote.propTypes = {
  quoteText: PropTypes.string,
  quoteAuthor: PropTypes.string,
  backgroundImage: PropTypes.string,
}

HeroQuote.defaultProps = {
  quoteText: '',
  quoteAuthor: '',
  backgroundImage: GeometricPatternPNG,
}

export default HeroQuote
