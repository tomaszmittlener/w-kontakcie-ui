import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms} from 'src/utils'
import {H3, ParagraphText} from 'src/components'
import map from 'lodash/map'

const ItemContainer = styled.figure`
  display: flex;
  flex-direction: column;
  padding: ${ms(4)} 0;
  margin: 0;
  border-bottom: 1px solid ${({theme: {colors}}) => colors.text};
  &:first-of-type {
    padding: 0 0 ${ms(4)} 0;
  }
  &:last-of-type {
    border-bottom: none;
    padding: ${ms(4)} 0 0 0;
  }
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${ms(4)};
  > svg {
    height: 80px;
  }
  ${({theme: {mq}}) => mq.desktop} {
    flex: 1;
    > svg {
      height: 130px;
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({theme: {mq}}) => mq.desktop} {
    flex: 3;
  }
`
const Description = styled(ParagraphText)`
  font-size: ${ms(1)};
`
const ItemsList = styled.ul``
const Item = styled.li``

const ItemTitle = styled(H3)`
  text-align: center;
  ${({theme: {mq}}) => mq.tablet} {
    text-align: left;
  }
`

class FeaturesTable extends React.Component {
  render() {
    const {data} = this.props
    return (
      <Fragment>
        {map(data, (item, itemIndex) => (
          <ItemContainer key={`practicalInfo-${item.title}-${itemIndex}`}>
            <ImageContainer>{item.img}</ImageContainer>
            <TextContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <Description>{item.description}</Description>
              <ItemsList>
                {map(item.bullets, (bullet, bulletIndex) => (
                  <Item
                    key={`therapy-${item.title}-${itemIndex}-${bulletIndex}`}>
                    {bullet}
                  </Item>
                ))}
              </ItemsList>
            </TextContainer>
          </ItemContainer>
        ))}
      </Fragment>
    )
  }
}

FeaturesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
}

export default FeaturesTable
