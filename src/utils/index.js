import React from 'react'
import reduceRight from 'lodash/reduceRight'
import {withBreakpoints} from 'react-match-breakpoints'
import {modularScale} from 'polished'

import CONFIG from 'constants/SiteConfig'

export const getLocalTitle = pathname => {
  const pathPrefix = CONFIG.pathPrefix ? CONFIG.pathPrefix : '/'
  const currentPath = pathname.replace(pathPrefix, '').replace('/', '')

  let title = ''
  switch (currentPath) {
    case '':
      title = 'Strona Główna'
      break
    case 'about':
      title = 'O mnie'
      break
    case 'therapy':
      title = 'Terapia'
      break
    case 'coaching':
      title = 'Coaching'
      break
    case 'contact':
      title = 'Kontakt'
      break
    default:
      title = 'Gabinet Psychoterapii i Rozwoju Osobistego'
      break
  }
  return title
}
export const getSiteDescription = pathname => {
  const pathPrefix = CONFIG.pathPrefix ? CONFIG.pathPrefix : '/'
  const currentPath = pathname.replace(pathPrefix, '').replace('/', '')

  let description = ''
  switch (currentPath) {
    case '':
      description = CONFIG.siteDescription
      break
    case 'about':
      description =
        'Nazywam się Anna Dejewska. Prowadzę terapię indywidualną osób dorosłych i młodzieży oraz life i business coaching.'
      break
    case 'therapy':
      description =
        'Trudności w relacjach, Depresja, Kryzysy i trudności osobiste, Lęki, nerwice, Trudności w pracy'
      break
    case 'coaching':
      description =
        'Prowadzę coaching w dla firm oraz osób indywidualnych. Coaching jest dla mnie procesem doskonalenia kompetencji w obszarze, który chce rozwijać Klient. Jest oparty na partnerskiej relacji i wzajemnym zaufaniu.'
      break
    case 'contact':
      description = `Skontaktuj się ze mną. tel: ${CONFIG.userEmail}, adres gabinetu: ${CONFIG.streetAddress}, ${CONFIG.addressLocality}, ${CONFIG.postalCode}`
      break
    default:
      description = CONFIG.siteDescription
      break
  }
  return description
}

export const isWindowDefined = typeof window !== `undefined`

export const compose = (...fns) =>
  reduceRight(
    fns,
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    value => value,
  )

export function ms(step) {
  return modularScale(step, '1rem', 'minorThird').replace('em', 'rem')
}

export const formatDate = date =>
  new Date(date).toString().replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/, '$2-$1-$3')

// TODO: fixes problem with gatsby build (react-match-breakpoints uses window object)
const mockWithBreakpointsProps = {
  breakpoints: {
    isDesktop: true,
    isDesktopL: false,
    isMobile: false,
    isTablet: false,
  },
}

const mockWithBreakpoints = Component => (
  <Component {...mockWithBreakpointsProps} />
)

export default (isWindowDefined ? withBreakpoints : mockWithBreakpoints)
