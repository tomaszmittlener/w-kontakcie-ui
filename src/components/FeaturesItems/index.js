import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms} from 'src/utils'
import {CheckIcon, H3, ParagraphText} from 'src/components'
import map from 'lodash/map'

const ImageContainer = styled.figure`
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  margin: 0 ${ms(1)} 0 0;
  > svg {
    height: 20px;
  }
`

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`
const Item = styled.li`
  display: flex;
  flex-direction: row;
  margin: 0 0 ${ms(2)} 0;
`

const ItemText = styled.span``

class FeaturesItems extends React.Component {
  render() {
    const {bullets} = this.props
    return (
      <ItemsList>
        {map(bullets, (bullet, bulletIndex) => (
          <Item key={`therapy-${bullet}-${bulletIndex}`}>
            <ImageContainer>
              <CheckIcon />
            </ImageContainer>
            <ItemText>{bullet}</ItemText>
          </Item>
        ))}
      </ItemsList>
    )
  }
}

FeaturesItems.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}

export default FeaturesItems
