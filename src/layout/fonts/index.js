import {injectGlobal} from 'styled-components'
import javieraLight from './Javiera-Light.woff'
import hindaMurai from './hindmadurai-light-webfont.woff'
import hindaMuraiMedium from './hindmadurai-medium-webfont.woff'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Port+Lligat+Slab|Fjord+One|Libre+Baskerville|Quandov|Corben|Donegal+One|Esteban|Andada');

@font-face {
  font-family: 'Javiera';
  src: url(${javieraLight}) format('woff');
  font-weight: normal;
  font-style: normal;

}

@font-face {
  font-family: 'Hinda Murai';
  src: url(${hindaMurai}) format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Hinda Murai';
  src: url(${hindaMuraiMedium}) format('woff');
  font-weight: bold;
  font-style: normal;
}
`
