import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

export const withStaticGraphQl = ({query}) => Component => props => (
  <StaticQuery
    query={query}
    render={data => <Component {...props} data={data} />}
  />
)
