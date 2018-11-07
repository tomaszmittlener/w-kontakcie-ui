import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'
import {ms} from 'src/utils'
import javieraLight from './fonts/Javiera-Light.woff'

const GlobalStyles = createGlobalStyle`

${normalize()}

@font-face {
  font-family: 'Javiera';
  src: url(${javieraLight}) format('woff');
  font-weight: normal;
  font-style: normal;
}

  html {
    box-sizing: border-box;
    line-height: 1.618;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  html,
  body {
    width: 100%;
    background-color: ${({theme: {colors}}) => colors.secondary};

  }

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${({
      theme: {
        typo: {fontFamily},
      },
    }) => fontFamily.primary};
    font-size: ${ms(1.5)};
    color: ${({theme: {colors}}) => colors.text};
  }
`
export default GlobalStyles
