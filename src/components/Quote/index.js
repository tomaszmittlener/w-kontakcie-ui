import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms} from 'src/utils'
import {H3, ParagraphText} from 'src/components'

const Container = styled.blockquote`
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    margin: auto;
    bottom: -15px;
    left: 0;
    right: 0;
    border-bottom: 1px solid ${({theme: {colors}}) => colors.primary};
    opacity: 0.2;
  }

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    margin: auto;
    top: -15px;
    left: 0;
    right: 0;

    border-bottom: 1px solid ${({theme: {colors}}) => colors.primary};
    opacity: 0.2;
  }
`

const QuoteParagraph = styled(H3)`
  text-align: center;
  font-style: italic;
  max-width: ${ms(22)};
  margin: 0 auto;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const HeroAuthorParagraph = styled(ParagraphText)`
  text-align: center;
  font-size: ${ms(1)};

  margin: ${ms(0)} 0 0 0;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

class Quote extends React.PureComponent {
  render() {
    const {text, author} = this.props
    return (
      <Container>
        <QuoteParagraph>{text}</QuoteParagraph>
        {author && <HeroAuthorParagraph>{author}</HeroAuthorParagraph>}
      </Container>
    )
  }
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
}

Quote.defaultProps = {
  author: '',
}

export default Quote
