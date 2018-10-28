import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import {H3, PlusIcon, FeaturesItems, ArrowIcon} from 'src/components'
import map from 'lodash/map'
import {contextPropTypesShape, withAppContext} from 'src/context'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${ms(1.5)};
  margin: 0;
  border-bottom: 1px dotted black;
  ${H3} {
    margin: 0;
  }
  &:last-of-type {
    border-bottom: none;
  }
`

const ExpandedDescription = styled.div`
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  padding: ${ms(0)} 0 0 ${ms(2)};
`
const IconContainer = styled.figure`
  transform: ${({isOpen}) => (isOpen ? 'rotateX(180deg)' : 'none')};
  margin: 0 0 0 ${ms(0)};
`
const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 300ms ease-in-out;
  justify-content: space-between;
  &:hover {
    color: ${({theme: {colors}}) => colors.primary};
  }
`
const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  border: 1px dotted black;
  padding: ${ms(1)};
  ${({theme: {mq}}) => mq.desktop} {
    flex: 1;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

class AccordeonTable extends React.Component {
  state = {
    openItem: undefined,
  }

  handleItemClick = index => {
    this.setState(state => ({
      openItem: state.openItem === index ? undefined : index,
    }))
  }

  render() {
    const {data} = this.props
    const {openItem} = this.state
    return (
      <Container>
        <Items>
          {map(data, (item, itemIndex) => (
            <ItemContainer key={`practicalInfo-${item.title}-${itemIndex}`}>
              <ItemTitle onClick={() => this.handleItemClick(itemIndex)}>
                <H3>{item.title}</H3>
                <IconContainer isOpen={itemIndex === openItem}>
                  <ArrowIcon />
                </IconContainer>
              </ItemTitle>
              <ExpandedDescription isOpen={itemIndex === openItem}>
                <FeaturesItems bullets={item.bullets} />
              </ExpandedDescription>
            </ItemContainer>
          ))}
        </Items>
      </Container>
    )
  }
}

AccordeonTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  context: contextPropTypesShape.isRequired,
}

export default withAppContext(AccordeonTable)
