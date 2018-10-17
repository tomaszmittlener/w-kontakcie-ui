import {css} from 'styled-components'
import {ms} from 'src/utils'
import {rgba} from 'polished'

export const StyledFirstLetter = css`
  p:first-of-type {
    padding: ${ms(4)} 0 0 0;
    margin: 0 0 ${ms(4)} 0;
    &:first-letter {
      float: left;
      margin-right: 10px;
      margin-left: -5px;
      margin-top: 5px;
      line-height: 0.73em;
      font-size: 5.5em;
      font-weight: 800;
      color: ${({theme: {colors}}) => colors.primary};
      font-family: ${({
        theme: {
          typo: {fontFamily},
        },
      }) => fontFamily.secondary};
    }
  }
`

export const MaxWidthText = css`
  max-width: 80ch;
  margin: 0 auto;
`

export const BlockQuote = css`
  text-align: justify;
  font-style: italic;
  & > :last-child {
    margin-bottom: 0;
  }
  &:before {
    content: '\\201C';
    font-size: ${ms(8)};
    line-height: 0;
    float: left;
    margin-left: -${ms(3)};
    margin-top: ${ms(-1)};
    color: ${({theme: {colors}}) => rgba(colors.primary, 0.4)};
  }
  &:after {
    content: '\\201D';
    font-size: ${ms(8)};
    line-height: 0;
    float: right;
    margin-right: -${ms(-8)};
    margin-top: ${ms(3.9)};
    color: ${({theme: {colors}}) => rgba(colors.primary, 0.4)};
  }

  background-color: ${({theme: {colors}}) => colors.canvas};
  box-sizing: border-box;
  padding: 0;
  margin: ${ms(7)} ${ms(0)};
  ${({theme: {mq}}) => mq.tablet} {
    margin: ${ms(7)} ${ms(6)};
  }
`
