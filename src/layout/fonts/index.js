import {injectGlobal} from 'styled-components'
import relawayRegular from './raleway-regular-webfont.woff'
import abelRegular from './abel-regular-webfont.woff'
import relawayBold from './raleway-bold-webfont.woff'
import ralewayItalic from './raleway-thinitalic-webfont.woff'

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
`