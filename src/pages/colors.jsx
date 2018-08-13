import React from 'react'
import { graphql } from "gatsby";
import map from 'lodash/map'
import Img from "gatsby-image";
import styled from 'styled-components'
import Theme from '../layout/theme'
import Layout from "../layout";
import {H1, H2, H3} from '../components/Headings'
import {ParagraphText} from '../components/Text'

const Logo = styled(Img)`
  max-height: 200px;
  width: 200px;
  height: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

`
const SectionContainer = styled.div`
  display: flex;
`
const ColorContainer = styled.div`
  display: flex;
  align-items: center;
`

const Color = styled.div`
  background-color: ${({color}) => color};
  height: 100px;
  border-radius: 100%;
  width: 100px;
  margin: 0 0 10px 30px ;

`

const ColorTitle = styled.span`
  display: block;
  font-family: ${({theme: {typo: {fontFamily}}}) => fontFamily.primary};
  font-size: 20px;
  color: ${({theme}) => theme.colors.text};
`

const TextsContainer = styled.div`
  width: 100%;
`
const SectionTitle = styled.div`
  margin-bottom: 30px;
  font-family: ${({theme: {typo: {fontFamily}}}) => fontFamily.primary};
  font-size: 32px;
`

const LogoColumn = Column.extend`
  justify-content: center;
  width: auto;
`
const ColorColumn = Column.extend`

`
const ColorsWrapper = styled.div`
  border-right: 1px solid;
  border-image: linear-gradient(to bottom, ${({theme: {colors}}) => colors.third}, rgba(0, 0, 0, 0)) 1 100%;
  padding-right: 20px;
`

const Quotation = styled(ParagraphText)`
  font-family: ${({theme: {typo: {fontFamily}}}) => fontFamily.primaryItalic};
 
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SecondPage = ({data, location}) => {
  return (
    <Layout location={location}>
      <PageContainer>
        <SectionContainer>
          <LogoColumn>
            <Logo
              title="Logo"
              alt="Logo of a company"
              fluid={data.logo.childImageSharp.fluid}
            />
          </LogoColumn>
          <ColorColumn>
            <SectionTitle>Kolory</SectionTitle>
            <ColorsWrapper>
              {map(Theme.colors, (color, i) =>
              (<ColorContainer key={i}>
                <ColorTitle>{color}</ColorTitle>
                <Color color={color} />
               </ColorContainer>)
            )
            }
            </ColorsWrapper>
          </ColorColumn>
          <Column>
            <SectionTitle>Typografia</SectionTitle>
            <TextsContainer>
              <H1>HEADER 1</H1>
              <H2>Header 2</H2>
              <H3>Header 3</H3>
              <ParagraphText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
              </ParagraphText>
              <Quotation>
                {`"Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo."`}
              </Quotation>
            </TextsContainer>
          </Column>
        </SectionContainer>
        <section>
          <H1>POMOC ONLINE</H1>


        </section>
      </PageContainer>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
    # other examples for queries: https://github.com/gatsbyjs/gatsby/tree/master/examples/using-gatsby-image/src/pages
    query GatsbyImageSampleQuery {
        logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

    }
`;
