import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {SectionContent, SectionLayout} from 'src/components'
import {ms} from 'src/utils'
import {darken} from 'polished'

const Container = styled.header`
  padding: ${ms(13)} 0 0 0;
  position: relative;
  z-index: 0;
  ${({verticalLayout}) => verticalLayout && VerticalTheme};
  ${({singleSection}) => singleSection && SingleSectionTheme};
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(14)} 0 ${ms(8)};
  }

  &:before {
    opacity: 1;
    background-image: linear-gradient(
      to bottom,
      ${({theme: {colors}}) => darken(0, colors.third)},
      ${({theme: {colors}}) => colors.canvas}
    );

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
  justify-content: center;
  align-items: center;
`

const SingleSectionTheme = css`
  ${HeroTitleSection} {
    width: 100%;
    ${({theme: {mq}}) => mq.desktop} {
      width: 100%;
    }
  }
`

const VerticalTheme = css`
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(13)} 0 0 0;
    margin: 0;
  }

  ${HeroSectionContent} {
    ${({theme: {mq}}) => mq.desktop} {
      flex-direction: column;
    }
  }

  ${HeroTitleSection} {
    margin: 0 0 ${ms(5)} 0;
    ${({theme: {mq}}) => mq.desktop} {
      width: 100%;
    }
  }

  ${HeroIllustrationSection} {
    margin: 0;
    ${({theme: {mq}}) => mq.desktop} {
      width: 100%;
      &:before {
        content: unset; // change to '' to restore
      }
    }
  }
`

const HeroSection = ({children, image, verticalLayout}) => (
  <Container verticalLayout={verticalLayout} singleSection={!image}>
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
  verticalLayout: PropTypes.bool,
}

HeroSection.defaultProps = {
  verticalLayout: false,
}

export default HeroSection
