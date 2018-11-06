import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {SectionContent, SectionLayout} from 'src/components'
import {ms} from 'src/utils'
import {darken} from 'polished'

const Container = styled.header`
  padding: ${ms(12)} 0 0 0;
  position: relative;
  z-index: 0;
  ${({singleSection}) => singleSection && SingleSectionTheme};
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(12)} 0 ${ms(8)};
  }
  ${({theme: {mq}}) => mq.desktopL} {
    padding: ${ms(13)} 0 ${ms(8)};
  }

  &:before {
    opacity: 1;
    background-color: ${({theme: {colors}}) => darken(0.1, colors.secondary)};
    top: 0;
    content: '';
    height: 85%;
    position: absolute;
    width: 100%;
    overflow: hidden;
    z-index: -1;
  }

  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;

    &:before {
      height: 100%;
    }
  }
`

const HeroSectionContent = styled(props => <SectionContent {...props} />)`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    align-items: center;
  }
`

const HeroTitleSection = styled.div`
  width: 100%;
  text-align: center;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
    width: 60%;
  }
`

const HeroIllustrationSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${ms(4)} 0 0 0;
  ${({theme: {mq}}) => mq.desktop} {
    justify-content: flex-end;
  }
  ${({theme: {mq}}) => mq.desktopL} {
    justify-content: center;
  }
`

const SingleSectionTheme = css`
  ${HeroTitleSection} {
    width: 100%;
    ${({theme: {mq}}) => mq.desktop} {
      width: 100%;
    }
  }
`

const HeroSection = ({children, image}) => (
  <Container singleSection={!image}>
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
