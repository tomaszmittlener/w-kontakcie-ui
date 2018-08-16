import {injectGlobal} from 'styled-components'
import relawayRegular from './raleway-regular-webfont.woff'
import abelRegular from './abel-regular-webfont.woff'
import relawayBold from './raleway-bold-webfont.woff'
import ralewayItalic from './raleway-thinitalic-webfont.woff'
import kottOneRegular from './kottaone-regular-webfont.woff'

import monsterrratBold from './montserrat-bold-webfont.woff'
import monsterrratMedium from './Montserrat-Medium.ttf'
import monsterrratThinItalic from './montserrat-thinitalic-webfont.woff'
import oswaldMedium from './Oswald-Medium.ttf'
import javieraLight from './Javiera-Light.woff'
import hindaMurai from './Hind-Madurai-Light.woff'

injectGlobal`
@font-face {
    font-family: 'ralewaybold';
    src: url(${relawayBold}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'ralewayitalic';
    src: url(${ralewayItalic}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'ralewayregular';
    src: url(${relawayRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'abelregular';
    src: url(${abelRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'kotta_oneregular';
    src: url(${kottOneRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
}






@font-face {
  font-family: 'Montserrat Bold';
  src: url(${monsterrratBold}) format('woff');
  font-weight: normal;
  font-style: normal;

}




@font-face {
  font-family: 'Montserrat';
  src: url(${monsterrratMedium}) format('woff');
  font-weight: normal;
  font-style: normal;

}




@font-face {
  font-family: 'Montserrat Thin Italic';
  src: url(${monsterrratThinItalic}) format('woff');
  font-weight: normal;
  font-style: normal;

}
@font-face {
  font-family: 'Osswald Medium';
  src: url(${oswaldMedium}) format('ttf');
  font-weight: normal;
  font-style: normal;

}
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
`
