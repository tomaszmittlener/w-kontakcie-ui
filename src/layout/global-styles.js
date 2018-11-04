import {injectGlobal} from 'styled-components'
import {normalize} from 'polished'
import 'sal.js/dist/sal.css'
import Theme from './theme'
import './fonts'
import { ms } from 'src/utils';

injectGlobal`

${normalize()}
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
