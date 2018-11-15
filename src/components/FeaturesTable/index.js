import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {ms} from 'utils'
import {H3, ParagraphText} from 'components'

const ItemContainer = styled.figure`
  display: flex;
  flex-direction: column;
  padding: ${ms(4)} 0;
  margin: 0;
  border-bottom: 1px dotted ${({theme: {colors}}) => colors.text};
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
    height: 90px;
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
  margin: 0 0 ${ms(-4)} 0;
`
const ItemsList = styled.ul`
  margin: 0;
`
const Item = styled.li``

const ItemTitle = styled(H3)`
  text-align: center;
  ${({theme: {mq}}) => mq.tablet} {
    text-align: left;
  }
`

class FeaturesTable extends React.Component {
  render() {
    const {data, className} = this.props
    return (
      <div className={className}>
        {data.map((item, itemIndex) => (
          <ItemContainer key={`practicalInfo-${item.title}-${itemIndex}`}>
            <ImageContainer>{item.img}</ImageContainer>
            <TextContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <Description>{item.description}</Description>
              <ItemsList>
                {item.bullets.map((bullet, bulletIndex) => (
                  <Item
                    key={`therapy-${item.title}-${itemIndex}-${bulletIndex}`}>
                    {bullet}
                  </Item>
                ))}
              </ItemsList>
            </TextContainer>
          </ItemContainer>
        ))}
      </div>
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
  className: PropTypes.string,
}

FeaturesTable.defaultProps = {
  className: '',
}

export default FeaturesTable
