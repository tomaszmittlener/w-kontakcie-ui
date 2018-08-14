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
