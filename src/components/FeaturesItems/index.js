import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ms} from 'src/utils'
import {CheckIcon} from 'src/components'
import map from 'lodash/map'

const ImageContainer = styled.figure`
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  margin: 0 ${ms(1)} 0 0;
  > svg {
    height: ${ms(1)};
  }
`

const Item = styled.li`
  display: flex;
  align-items: center;
  margin: ${ms(2)} 0 0 0;
`

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  ${({small}) =>
    small &&
    css`
      ${ImageContainer} {
        align-self: center;
        margin: 0 ${ms(0)} 0 0;
        > svg {
          height: ${ms(0)};
        }
      }

      ${Item} {
        margin: ${ms(0)} 0 0 0;
      }
    `};
`

class FeaturesItems extends React.PureComponent {
  render() {
    const {bullets, small} = this.props
    return (
      <ItemsList small={small}>
        {map(bullets, (bullet, bulletIndex) => (
          <Item key={`therapy-${bullet}-${bulletIndex}`}>
            <ImageContainer>
              <CheckIcon />
            </ImageContainer>
            <span>{bullet}</span>
          </Item>
        ))}
      </ItemsList>
    )
  }
}

FeaturesItems.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  small: PropTypes.bool,
}

FeaturesItems.defaultProps = {
  small: false,
}

export default FeaturesItems
