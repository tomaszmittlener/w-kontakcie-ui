import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {SectionContent, SectionLayout} from 'src/components'
import {ms} from 'src/utils'

//  background-color: ${({theme: {colors}}) => colors.third};
const Container = styled.header`
  padding: ${ms(13)} 0 0 0;
  margin: 0 0 ${ms(11)} 0;
  background-image: linear-gradient(
    to bottom,
    ${({theme: {colors}}) => `${colors.third},${colors.canvas}`}
  );

  ${({theme: {mq}}) => mq.desktop} {
    margin: 0;
    padding: ${ms(13)} 0 ${ms(11)};
  }
  ${({verticalLayout}) => verticalLayout && VerticalTheme};
`

const HeroSectionContent = styled(props => <SectionContent {...props} />)`
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
  height: 100%;
  max-width: ${ms(17)};
  display: flex;
  justify-content: center;
  margin: ${ms(8)} 0 0 0;
  position: relative;

  .gatsbyImageWrapper {
    width: 100%;
    height: 100%;
  }

  > svg {
    z-index: ${({theme: {layers}}) => layers.topBottom};
  }

  &:before {
    background-color: ${({theme: {colors}}) => colors.canvas};
    bottom: 0;
    content: unset; // change to '' to restore
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
  }
`

const VerticalTheme = css`
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(13)} 0 0 0;
    margin: 0 0 ${ms(11)} 0;
  }

  ${HeroSectionContent} {
    ${({theme: {mq}}) => mq.desktop} {
      flex-direction: column;
    }
  }

  ${HeroTitleSection} {
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
  <Container verticalLayout={verticalLayout}>
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
