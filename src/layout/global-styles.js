import {injectGlobal} from 'styled-components'
import {normalize} from 'polished'
import {ms} from 'src/utils'
import javieraLight from './fonts/Javiera-Light.woff'
import Theme from './theme'

injectGlobal`

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

  }

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${Theme.typo.fontFamily.primary};
    font-size: ${ms(1.5)};
    color: ${Theme.colors.text};
  }







`
