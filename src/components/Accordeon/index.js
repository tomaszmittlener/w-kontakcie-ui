import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import {
  H2,
  H3,
  H4,
  ParagraphText,
  PageSection,
  SectionContent,
  SectionLayout,
  ArrowIcon,
  EarthIcon,
} from 'src/components'
import map from 'lodash/map'
import {contextPropTypesShape, withAppContext} from 'src/context'

const ItemContainer = styled.figure`
  display: flex;
  flex-direction: column;
  padding: 0 0 ${ms(1.5)} 0;
  margin: 0 0 ${ms(1.5)} 0;
  border-bottom: 1px solid black;
  ${H3} {
    margin: 0;
  }
  &:last-of-type {
    padding: 0;
    margin: 0;
    border-bottom: none;
  }
`

const ExpandedDescription = styled.div`
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
`
const IconContainer = styled.div`
  transform: ${({isOpen}) => (isOpen ? 'rotateX(180deg)' : 'none')};
  transition: transform 300ms ease-in-out;
  margin: 0 ${ms(0)} 0;
`
const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 300ms ease-in-out;
  &:hover {
    color: ${({theme: {colors}}) => colors.primary};
  }
`
const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  ${({theme: {mq}}) => mq.desktop} {
    flex: 1;
  }
`
const DesktopImage = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  > svg {
    height: 300px;
  }
`
const MobileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${ms(4)} 0;
  > svg {
    height: 200px;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${ms(4)} 0;
`

class Accordeon extends React.Component {
  state = {
    openItem: 0,
  }

  handleItemClick = index => {
    this.setState({openItem: index})
  }

  render() {
    const {
      data,
      context: {isMobile, isTablet},
    } = this.props
    const isMobileView = isMobile || isTablet
    return (
      <Container>
        <Items>
          {map(data, (item, itemIndex) => (
            <ItemContainer key={`practicalInfo-${item.title}-${itemIndex}`}>
              <ItemTitle onClick={() => this.handleItemClick(itemIndex)}>
                <IconContainer isOpen={itemIndex === this.state.openItem}>
                  <ArrowIcon />
                </IconContainer>
                <H3>{item.title}</H3>
              </ItemTitle>
              <ExpandedDescription isOpen={itemIndex === this.state.openItem}>
                {isMobileView && (
                  <MobileImage>{data[this.state.openItem].img}</MobileImage>
                )}
                <ul>
                  {map(item.bullets, (bullet, bulletIndex) => (
                    <li
                      key={`therapy-${item.title}-${itemIndex}-${bulletIndex}`}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </ExpandedDescription>
            </ItemContainer>
          ))}
        </Items>
        {!isMobileView && (
          <DesktopImage>{data[this.state.openItem].img}</DesktopImage>
        )}
      </Container>
    )
  }
}

Accordeon.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  context: contextPropTypesShape.isRequired,
}

export default withAppContext(Accordeon)
