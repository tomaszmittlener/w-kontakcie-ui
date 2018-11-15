import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {darken} from 'polished'
import Particles from 'react-particles-js'

import withBreakpoints, {ms} from 'utils'
import getParticlesConfig from 'constants/ParticlesConfig'
import {SectionContent, SectionLayout} from 'components'
import { breakpointsPropTypesShape } from 'utils/PropTypes';

const Container = styled.header`
  padding: ${ms(12)} 0 0 0;
  position: relative;
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
    z-index: ${({theme: {layers}}) => layers.bottom};
    top: 0;
    content: '';
    height: 85%;
    position: absolute;
    width: 100%;
    overflow: hidden;
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
  z-index: ${({theme: {layers}}) => layers.topBottom};
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
    width: 60%;
  }
`

const HeroIllustrationSection = styled.div`
  z-index: ${({theme: {layers}}) => layers.topBottom};
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

const StyledParticles = styled(Particles)`
  position: absolute;
  z-index: ${({theme: {layers}}) => layers.middleBottom};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const HeroSection = ({children, image, breakpoints: {isTablet, isMobile}}) => (
  <Container singleSection={!image}>
    <StyledParticles params={getParticlesConfig(isTablet || isMobile)} />
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
  breakpoints: breakpointsPropTypesShape.isRequired,
}

export default withBreakpoints(HeroSection)
