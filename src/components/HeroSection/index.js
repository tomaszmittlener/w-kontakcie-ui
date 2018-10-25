import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {SectionContent, SectionLayout} from 'src/components'
import {ms} from 'src/utils'

const Container = styled.header`
  padding: ${ms(13)} 0 0 0;
  margin: 0 0 ${ms(11)} 0;
  background-color: ${({theme: {colors}}) => colors.third};
  ${({theme: {mq}}) => mq.desktop} {
    margin: 0;
    padding: ${ms(13)} 0 ${ms(11)};
  }
`
const HeroSectionContent = styled(SectionContent)`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
  }
`

const HeroTitleSection = styled.div`
  width: 100%;
  ${({theme: {mq}}) => mq.desktop} {
    width: 66%;
  }
`

const HeroIllustrationSection = styled.div`
  width: 100%;
  max-width: ${ms(17)};
  display: flex;
  justify-content: center;
  margin: ${ms(8)} 0 0 0;
  position: relative;
  > svg {
    z-index: ${({theme: {layers}}) => layers.topBottom};  
  }
  
  &:before {
    background-color: ${({theme: {colors}}) => colors.canvas};
    bottom: 0;
    content: '';
    height: 50%;
    position: absolute;
    width: 100vw;
  }

  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    width: 33%;
    margin: 0 0 0 ${ms(4)};

    &:before {
      content: unset;
    }

`

const HeroSection = ({children, image}) => (
  <Container>
    <SectionLayout>
      <HeroSectionContent>
        <HeroTitleSection>{children}</HeroTitleSection>
        <HeroIllustrationSection>{image}</HeroIllustrationSection>
      </HeroSectionContent>
    </SectionLayout>
  </Container>
)

HeroSection.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
}

export default HeroSection
