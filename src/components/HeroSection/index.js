import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {darken} from 'polished'
import Particles from 'react-particles-js'

import {ms} from 'utils'
import THEME from 'layout/theme'
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

export const params = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: darken(0.4, THEME.colors.secondary),
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1.6241544246026902,
        opacity_min: 0.1,
        sync: true,
      },
    },
    size: {
      value: 2,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: darken(0.4, THEME.colors.secondary),
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'bubble',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 633.4202255950493,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 170.53621458328246,
        size: 15,
        duration: 3.979178340276591,
        opacity: 0.08932849335314796,
        speed: 3,
      },
      repulse: {
        distance: 105.57003759917487,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const HeroSection = ({children, image}) => (
  <Container singleSection={!image}>
    <StyledParticles
      params={params} />
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
