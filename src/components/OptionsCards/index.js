import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms} from 'src/utils'
import {FeaturesItems, H3, Link} from 'src/components/index'

const OptionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: ${ms(4)} 0 0 0;
  justify-content: center;
  ${({theme: {mq}}) => mq.tablet} {
    flex-flow: row nowrap;
  }
`

const Col = styled.div`
  display: flex;
  flex: ${ms(120)} 0;
  flex-flow: column;
  align-items: center;
  margin: 0 0 ${ms(4)} 0;

  ${({theme: {mq}}) => mq.tablet} {
    flex: ${ms(17)} 0;
    margin: 0;
    &:nth-of-type(n + 1) {
      margin: 0 ${ms(4)} 0 0;
    }
    &:last-of-type {
      margin: 0;
    }
  }
`
const Option = styled.div`
  height: 100%;
  padding: ${ms(3)};
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  border: 1px dashed ${({theme: {colors}}) => colors.text};
  ${({theme}) => theme.mq.tablet} {
    margin: 0 0 ${ms(3)} 0;
  }
`

const OptionFigure = styled.figure`
  margin: 0 0 ${ms(3)} 0;
  display: flex;
  justify-content: center;
  svg {
    height: ${ms(9)};
  }
`
const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-indent: 0;
  height: 100%;
`
const ReadMoreLink = styled(Link)`
  margin: ${ms(2)} auto 0 auto;
  display: inline-block;
  text-align: center;
  color: ${({theme: {colors}}) => colors.primary};
`

const OptionTitle = styled(H3)`
  margin: 0 0 ${ms(2)} 0;
  display: block;
  text-align: center;
`

class OptionsCards extends React.PureComponent {
  render() {
    const {data} = this.props
    return (
      <OptionsContainer>
        {data.map((option, index) => (
          <Col key={`home-col-${index}`}>
            <Option>
              <NavLink to={option.link}>
                <OptionFigure>{option.img}</OptionFigure>
              </NavLink>
              <OptionTitle>{option.title}</OptionTitle>
              <DescriptionList>
                <FeaturesItems bullets={option.bullets} small />
              </DescriptionList>
              <ReadMoreLink to="/therapy">Czytaj wiecej</ReadMoreLink>
            </Option>
          </Col>
        ))}
      </OptionsContainer>
    )
  }
}

OptionsCards.propTypes = {
  data: PropTypes.array.isRequired,
}

export default OptionsCards
