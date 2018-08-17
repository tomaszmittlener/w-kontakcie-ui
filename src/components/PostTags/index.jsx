import React, {Component} from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import {Link} from 'gatsby'
import {ms} from 'src/utils'
import {rgba} from 'polished'

const TagButton = styled(Link)`
  margin: ${ms(-8)};
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  padding: ${ms(-9)} ${ms(-4)};
  border-radius: ${ms(0)};
  background-color: ${({theme: {colors}}) => rgba(colors.third, 0.3)};
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
    background-color: ${({theme: {colors}}) => rgba(colors.third, 0.6)};
  }
`

const TagsContainer = styled.div`
  padding: ${ms(0)};
`

// const Title = styled(ParagraphText)``

class Index extends Component {
  render() {
    const {tags} = this.props
    return (
      <TagsContainer>
        {tags &&
          tags.map(tag => (
            <TagButton
              key={tag}
              style={{textDecoration: 'none'}}
              to={`/tags/${kebabCase(tag)}`}>
              {tag}
            </TagButton>
          ))}
      </TagsContainer>
    )
  }
}

export default Index
