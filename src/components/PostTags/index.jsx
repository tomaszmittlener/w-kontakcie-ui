import React, {Component} from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import {Link} from 'src/components'
import {ms} from 'src/utils'
import {rgba} from 'polished'

const TagsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const TagItem = styled.li`
  display: inline-block;
  margin: ${ms(-8)};
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  padding: ${ms(-9)} ${ms(-4)};
  border-radius: ${ms(0)};
  background-color: ${({theme: {colors}}) => rgba(colors.secondary, 0.3)};
  border: 1px solid ${({theme: {colors}}) => rgba(colors.primary, 0.2)};
  transition: background-color 300ms linear;
  color: ${({theme: {colors}}) => rgba(colors.text, 0.8)};
  &:first-of-type {
    margin: ${ms(-8)} ${ms(-8)} ${ms(-8)} 0;
  }
  &:last-of-type {
    margin: ${ms(-8)} 0 ${ms(-8)} ${ms(-8)};
  }
  &:hover {
    background-color: ${({theme: {colors}}) => rgba(colors.secondary, 0.6)};
  }
`

class Index extends Component {
  render() {
    const {tags} = this.props
    return (
      tags && (
        <TagsList
          aria-label="Tags list">
          {tags.map(tag => (
            <TagItem key={tag}>
              <Link
                aria-label={`go to "${tag}" tag page`}
                to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
            </TagItem>
          ))}
        </TagsList>
      )
    )
  }
}

export default Index
