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
    secondary: '#d9e1e1',
    canvas: '#FBFBFB',
  },
  typo: {
    fontFamily: {
      primary: "'Javiera', serif;",
      secondary: "'Javiera', sans-serif",
    },
    weights: {
      light: 300,
      normal: 400,
      bold: 700,
    },
  },
  mq: {
    tablet: `@media ${TABLET_MEDIA_QUERY}`,
    desktop: `@media ${DESKTOP_MEDIA_QUERY}`,
    desktopL: `@media ${DESKTOP_L_MEDIA_QUERY}`,
    desktopXL: `@media ${DESKTOP_XL_MEDIA_QUERY}`,
  },
  layers: {
    top: 1000,
    middleTom: 800,
    bottomTom: 600,
    middle: 400,
    topBottom: 200,
    middleBottom: 0,
    bottom: -200,
  },
}
