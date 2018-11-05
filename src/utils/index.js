import React from 'react'
import reduceRight from 'lodash/reduceRight'
import {withBreakpoints} from 'react-match-breakpoints'
import modularScale from 'polished/lib/helpers/modularScale'
import config from '../../data/SiteConfig'

export const getLocalTitle = pathname => {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const pathPrefix = config.pathPrefix ? config.pathPrefix : '/'
  const currentPath = pathname.replace(pathPrefix, '').replace('/', '')
  let title = ''
  if (currentPath === '') {
    title = 'Home'
  } else if (currentPath === 'tags/') {
    title = 'Tags'
  } else if (currentPath === 'categories/') {
    title = 'Categories'
  } else if (currentPath === 'about/') {
    title = 'About'
  } else if (currentPath === 'colors') {
    title = 'Colors'
  } else if (currentPath.indexOf('posts')) {
    title = 'Article'
  } else if (currentPath.indexOf('tags/')) {
    const tag = currentPath
      .replace('tags/', '')
      .replace('/', '')
      .replace('-', ' ')
    title = `Tagged in ${capitalize(tag)}`
  } else if (currentPath.indexOf('categories/')) {
    const category = currentPath
      .replace('categories/', '')
      .replace('/', '')
      .replace('-', ' ')
    title = `${capitalize(category)}`
  }
  return title
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
