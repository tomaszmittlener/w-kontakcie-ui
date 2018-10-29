import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {SectionContent, SectionLayout} from 'src/components'
import {ms} from 'src/utils'
import ConstellationImage from 'src/components/Images/Constellation.png'
import {lighten} from 'polished'

//  background-color: ${({theme: {colors}}) => colors.third};
const Container = styled.header`
  padding: ${ms(14)} 0 ${ms(8)};
  position: relative;
  z-index: 0;
  background-color: ${({theme: {colors}}) => lighten(0, colors.third)};


  ${({verticalLayout}) => verticalLayout && VerticalTheme};
  ${({singleSection}) => singleSection && SingleSectionTheme};

`

const HeroSectionContent = styled(props => <SectionContent {...props} />)`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    align-items: flex-start;
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
  //width: 100%;
  height: 300px;
  //display: flex;
  //justify-content: center;
  margin: ${ms(8)} 0 0 0;
  //position: relative;

  //.gatsbyImageWrapper {
  //  width: 100%;
  //  height: 100%;
  //}


  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    width: 40%;
    margin: 0 0 0 ${ms(8)};

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
