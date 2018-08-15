import React from 'react'
import { StaticQuery, graphql } from 'gatsby';

export const withStaticGraphQl = ({query}) => Component => props => {
  return (
    <StaticQuery
      query={query}
      render={data => <Component {...props} data={data} />}
    />
  )
}
