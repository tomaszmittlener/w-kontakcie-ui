import {
  TABLET_MEDIA_QUERY,
  DESKTOP_MEDIA_QUERY,
  DESKTOP_L_MEDIA_QUERY,
  DESKTOP_XL_MEDIA_QUERY,
} from '../constants/MediaQueries'

export default {
  colors: {
    text: '#242021',
    primary: '#25516C',
    secondary: '#3BA08F',
    third: '#B1C3C3',
    canvas: '#FBFBFB',
  },
  typo: {
    fontFamily: {
      secondary: "'abelregular', sans-serif",
      primary: "'ralewayregular', 'abelregular', sans-serif",
      primaryItalic: "'ralewayitalic', 'abelregular', sans-serif",
      primaryBold: "'ralewaybold', 'abelregular', sans-serif",
    }
  },
  mq: {
    tablet: `@media ${TABLET_MEDIA_QUERY}`,
    desktop: `@media ${DESKTOP_MEDIA_QUERY}`,
    desktopL: `@media ${DESKTOP_L_MEDIA_QUERY}`,
    desktopXL: `@media ${DESKTOP_XL_MEDIA_QUERY}`,
  },
  layers: {
    top: 1000,
    middle: 900,
    bottom: 800,
  },
}