import React from 'react'
import PropTypes from 'prop-types'
import withBreakpoints, {ms} from 'src/utils'
import styled from 'styled-components'
import {Link as ScrollLink} from 'react-scroll'

import {H3, ArrowIcon} from 'src/components'
import {breakpointsPropTypesShape} from 'src/utils/PropTypes'

const ItemContainer = styled.figure`
  display: flex;
  flex-direction: column;
  padding: 0 0 ${ms(1.5)} 0;
  margin: 0 0 ${ms(1.5)} 0;
  border-bottom: 1px dotted ${({theme: {colors}}) => colors.text};
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
const IconContainer = styled.figure`
  transform: ${({isOpen}) => (isOpen ? 'rotateX(180deg)' : 'none')};
  margin: 0 ${ms(1)} 0;
`
const ItemTitle = styled(ScrollLink)`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 300ms ease-in-out;
  &:hover {
    color: ${({theme: {colors}}) => colors.primary};
  }
`

const ItemTitleText = styled(H3)`
  margin: 0;
`
const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  max-width: ${ms(19)};
  margin: 0 auto;
  ${({theme: {mq}}) => mq.desktop} {
    flex: 3;
  }
`
const DesktopImage = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  margin: 0 0 0 ${ms(9)};
  > svg {
    height: 200px;
  }
`
const MobileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${ms(4)} 0;
  > svg {
    height: 90px;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
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
      breakpoints: {isTablet, isMobile},
      className,
      scrollTo,
    } = this.props
    const isMobileView = isMobile || isTablet
    return (
      <Container className={className} >
        <Items>
          {data.map((item, itemIndex) => (
            <ItemContainer key={`practicalInfo-${item.title}-${itemIndex}`}>
              <ItemTitle
                to={scrollTo}
                onClick={() => this.handleItemClick(itemIndex)}>
                <IconContainer isOpen={itemIndex === this.state.openItem}>
                  <ArrowIcon />
                </IconContainer>
                <ItemTitleText>{item.title}</ItemTitleText>
              </ItemTitle>
              <ExpandedDescription isOpen={itemIndex === this.state.openItem}>
                {isMobileView && (
                  <MobileImage>{data[this.state.openItem].img}</MobileImage>
                )}
                <ul>
                  {item.bullets.map((bullet, bulletIndex) => (
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
  breakpoints: breakpointsPropTypesShape.isRequired,
  className: PropTypes.string,
  scrollTo: PropTypes.string,
}
Accordeon.defaultProps = {
  className: '',
  scrollTo: '',
}

export default withBreakpoints(Accordeon)
