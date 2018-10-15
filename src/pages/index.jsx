import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import sal from 'sal.js'
import {compose, ms} from 'src/utils'
import {withLocales, withLocalesContextProvider} from 'src/context'
import styled from 'styled-components'
import Layout from 'src/layout'
import {
  SEO,
  AboutMeSection,
  ArticlesExcerpts,
  PageSectionTitle,
  PageSection,
  Intro,
  OfferSection,
  SectionLayout,
  SectionContent,
  H1,
  ParagraphText,
  HumanImage,
  MazeBrainImage,
} from 'src/components'
import {
  articlesExcerptsPropTypesShape,
  articlesImagesPropTypesShape,
  imageFluidPropTypesShape,
  locationPropTypesShape,
} from 'src/utils/PropTypes'

import config from '../../data/SiteConfig'

// about me
const AboutMeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

// offer
const ArticlesWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    max-width: 1000px;
  }
  > figure {
    flex: 1;
  }
`

const GradientPageSection = styled.section`
  padding: ${ms(8)} ${ms(2)};
  height: 100%;
  background-image: linear-gradient(to center, ${({theme: {colors}}) =>
    colors.third} , ${({theme: {colors}}) => colors.canvas});
    min-height: unset;
  }
`
const GradientBottonPageSection = styled.section`
  padding: ${ms(8)} ${ms(2)};
  height: 100%;
  background-image: linear-gradient(to top, ${({theme: {colors}}) =>
    colors.third} , ${({theme: {colors}}) => colors.canvas});
    min-height: unset;
  }
`

const HeroSection = styled.header`
  padding: ${ms(13)} 0 ${ms(11)};
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
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
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

class Index extends React.Component {
  render() {
    const {
      t,
      location,
      data: {meImage, articlesExcerpts, articlesImages},
    } = this.props
    sal()
    return (
      <Layout location={location} withTopPadding hideLogo>
        <Helmet title={config.siteTitle} />
        <SEO />
        <HeroSection>
          <SectionLayout>
            <HeroSectionContent>
              <HeroText>
                <H1>{t('company.name')}</H1>
                <HeroParagraph>{t('company.type')}</HeroParagraph>
              </HeroText>
              <HeroIllustration>
                <HumanAnimation>
                  <Human />
                  <Brain />
                </HumanAnimation>
              </HeroIllustration>
            </HeroSectionContent>
          </SectionLayout>
        </HeroSection>

        <PageSection>
          <SectionLayout>
            <SectionContent>
              <PageSectionTitle>
                {t('mainPage.aboutMeSectionTitle')}
              </PageSectionTitle>
              <AboutMeSection meImage={meImage} />
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection>
          <PageSectionTitle>{t('mainPage.offerSectionTitle')}</PageSectionTitle>
          <OfferSection />
        </PageSection>

        <GradientBottonPageSection>
          <PageSectionTitle>
            {t('mainPage.articlesSectionTitle')}
          </PageSectionTitle>
          <ArticlesWrapper>
            <ArticlesExcerpts
              articlesExcerpts={articlesExcerpts}
              articlesImages={articlesImages}
            />
          </ArticlesWrapper>
        </GradientBottonPageSection>
      </Layout>
    )
  }
}

Index.propTypes = {
  location: locationPropTypesShape.isRequired,
  data: PropTypes.shape({
    meImage: imageFluidPropTypesShape.isRequired,
    articlesExcerpts: articlesExcerptsPropTypesShape.isRequired,
    articlesImages: articlesImagesPropTypesShape.isRequired,
  }).isRequired,
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(Index)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    meImage: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    articlesExcerpts: allMarkdownRemark(
      limit: 2
      sort: {fields: [fields___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          fields {
            date
            slug
            directory
          }
          id
          timeToRead
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
    articlesImages: allFile(filter: {name: {eq: "cover"}}) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
