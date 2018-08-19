import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {H1, H2, H3, Link, ParagraphText} from 'src/components/index'
import {ms} from 'src/utils'
import RehypeReact from 'rehype-react'
import isEmpty from 'lodash/isEmpty'

const EmphasisText = styled.em`
  font-style: italic;
`

const StrongText = styled.strong`
  font-weight: 700;
`

const StyledParagraphText = styled(ParagraphText)`
  margin: 0 0 ${ms(4)} 0;
`

const StyledLink = styled(Link)`
  color: ${({theme: {colors}}) => colors.primary};
`

const PLink = ({href, ...props}) => <StyledLink to={href} {...props}/>

const defaultComponents = {
  a: PLink,
  h1: H1,
  h2: H2,
  h3: H3,
  p: StyledParagraphText,
  em: EmphasisText,
  strong: StrongText,
}

const MarkdownAst = ({htmlAst, customComponents}) => {
  const renderAst = new RehypeReact({
    createElement: (component, props, children) => {
      if (component === 'div') {
        return <Fragment>{children}</Fragment>
      }
      return React.createElement(component, props, children)
    },
    components: {
      ...defaultComponents,
      ...customComponents,
    },
  }).Compiler

  return renderAst(htmlAst)
}

MarkdownAst.propTypes = {
  htmlAst: PropTypes.object.isRequired,
  customComponents: PropTypes.object,
}

MarkdownAst.defaultProps = {
  customComponents: {},
}

export default MarkdownAst
