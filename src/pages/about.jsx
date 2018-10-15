import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {compose, ms} from 'src/utils'
import {withLocalesContextProvider, withLocales} from 'src/context'
import {graphql} from 'gatsby'
import {
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'
import {
  H1,
  HumanImage,
  MazeBrainImage,
  ParagraphText,
  SectionContent,
  SectionLayout,
  PageBodyAboutMe,
} from 'src/components'
import styled from 'styled-components'
import Img from 'gatsby-image'

const HeroSection = styled.header`
  padding: ${ms(13)} 0 0;
  background-color: ${({theme: {colors}}) => colors.third};
`

const HeroParagraph = styled(ParagraphText)`
  font-size: ${ms(5)};
  line-height: ${ms(5)};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const HumanAnimation = styled.div`
  position: relative;
  height: 457px;
  width: 312px;
`

const Brain = styled(MazeBrainImage)`
  position: absolute;
  left: 70px;
  top: 40px;
`
const Human = styled(HumanImage)`
  position: absolute;
`
const HeroSectionContent = styled(SectionContent)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  &:before {
    background-color: ${({theme: {colors}}) => colors.canvas};
    bottom: 0;
    content: '';
    height: 25.5%;
    position: absolute;
    width: 100vw;
  }
`
const HeroText = styled.div`
  flex: 1;
`

const HeroIllustration = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Avatar = styled(Img)`
  width: 400px;
`

class AboutPage extends Component {
  render() {
    const {
      data: {meImage},
      config,
      t,
    } = this.props
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`O mnie | ${config('siteTitle')}`} />
        <HeroSection>
          <SectionLayout>
            <HeroSectionContent>
              <HeroText>
                <H1>{t('aboutMePage.pageTitle')}</H1>
              </HeroText>
              <HeroIllustration>
                <Avatar
                  title="avatar"
                  alt="Anna Dejewska's photo"
                  sizes={meImage.childImageSharp.fluid}
                />
              </HeroIllustration>
            </HeroSectionContent>
          </SectionLayout>
        </HeroSection>
        <PageBodyAboutMe />
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  location: locationPropTypesShape.isRequired,
  config: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    meImage: imageFluidPropTypesShape.isRequired,
  }).isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(AboutPage)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AboutPageQuery {
    meImage: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
