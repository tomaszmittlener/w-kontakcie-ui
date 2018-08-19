import React, {Fragment} from 'react'
import styled, {css} from 'styled-components'
import {withLocales} from 'src/context/locales'
import {ms, formatDate, compose} from 'src/utils'
import {
  localesPropTypesShape,
  articlesExcerptsPropTypesShape,
} from 'src/utils/PropTypes'
import {Link, Image, H2, ParagraphText} from 'src/components'
import map from 'lodash/map'
import {rgba} from 'polished'


// padding: ${ms(0)}; // ?? where should it go ??

const ArticleContainer = styled.figure`
  margin: 0 0 ${ms(2)} 0;
  padding: ${ms(0)};
  ${({theme: {mq}}) => mq.desktop} {
    padding: 0;
    margin: ${ms(0)} ${ms(-1)};
  }
  ${({small}) => small && smallMixin};
`

const StyledImage = styled(Image)`
  height: 200px;
  opacity: 1;
  transition: opacity 300ms linear;
  ${ArticleContainer}:hover & {
    opacity: 0.8;
  }
  ${({theme: {mq}}) => mq.desktop} {
    width: 450px;
  }
`

const smallMixin = css`
  ${({theme: {mq}}) => mq.desktop} {
    padding: ${ms(0)};
    max-width: 300px;
  }

  ${StyledImage} {
    ${({theme: {mq}}) => mq.desktop} {
      height: 150px;
      width: 100%;
      margin: 0 auto;
    }
  }
`

const DateText = styled.time`
  font-style: italic;
  display: block;
  font-size: ${ms(-1)};
  margin: 0 0 ${ms(-1)} 0;
  opacity: 0.7;
`

const StyledH2 = styled(H2)`
  margin: ${ms(-1)} 0 ${ms(-10)} 0;
  text-align: center;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
  }
`

const ArticlesExcerpts = ({t, articlesExcerpts: {edges: articles}, small}) => (
  <Fragment>
    {map(articles, ({node: {id, excerpt, fields, frontmatter}}) => (
      <ArticleContainer key={id} small={small}>
        <Link to={fields.slug}>
          <StyledImage
            small={small}
            title="article cover image"
            src={frontmatter.cover}
            aspectRatio={2}
            maxWidth="800px"
            alt={`cover image of "${frontmatter.title}" article`}
          />
          <figcaption>
            <StyledH2>{frontmatter.title}</StyledH2>
            <DateText>{formatDate(fields.date)}</DateText>
            <ParagraphText>{excerpt}</ParagraphText>
          </figcaption>
        </Link>
      </ArticleContainer>
    ))}
  </Fragment>
)

ArticlesExcerpts.propTypes = {
  articlesExcerpts: articlesExcerptsPropTypesShape.isRequired,
  ...localesPropTypesShape,
}

export default compose(withLocales)(ArticlesExcerpts)
