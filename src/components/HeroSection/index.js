import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {darken} from 'polished'
import Particles from 'react-particles-js'

import {ms} from 'utils'
import PARTICLES_CONFIG from 'constants/ParticlesConfig'
import {SectionContent, SectionLayout} from 'components'

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

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const HeroSection = ({children, image}) => (
  <Container singleSection={!image}>
    <StyledParticles params={PARTICLES_CONFIG} />
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
