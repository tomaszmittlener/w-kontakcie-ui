import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ms} from 'src/utils'
import {CheckIcon, H3, ParagraphText, ArrowIcon} from 'src/components'
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
  display: inline-flex;
  flex-direction: column;
`

const Item = styled.li`
  display: flex;
  margin: 0 0 ${ms(2)} 0;
`

const ItemText = styled.span``

const DesctiptionText = styled(H3)`
  text-align: center;
  display: inline-block;
  font-size: ${ms(2)};
  margin: ${ms(5)} 0;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.primary};
`

const HidingWarpper = styled.div`
  height: ${({isOpen}) => (isOpen ? '100%' : ms(14))};
  overflow: hidden;
`

const IconContainer = styled.div`
  transform: ${({isOpen}) => (isOpen ? 'rotateX(180deg)' : 'none')};
  margin: ${ms(2)} 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
`

class FeaturesItems extends React.Component {
  state = {
    isOpen: false,
  }

  handleToggleOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }

  render() {
    const {bullets, title} = this.props
    const {isOpen} = this.state
    return (
      <ItemsList>
        <DesctiptionText onClick={this.handleToggleOpen}>
          {title}
        </DesctiptionText>
        <HidingWarpper isOpen={isOpen}>
          {map(bullets, (bullet, bulletIndex) => (
            <Item key={`therapy-${bullet}-${bulletIndex}`}>
              <ImageContainer>
                <CheckIcon />
              </ImageContainer>
              <ItemText>{bullet}</ItemText>
            </Item>
          ))}
        </HidingWarpper>
        <IconContainer isOpen={isOpen} onClick={this.handleToggleOpen}>
          <ArrowIcon />
        </IconContainer>
      </ItemsList>
    )
  }
}

FeaturesItems.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  title: PropTypes.string.isRequired,
}

export default FeaturesItems
