import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link, ParagraphText} from 'src/components'
import {withLocales} from 'src/context'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {ms} from 'src/utils'

const Avatar = styled(Img)`
  height: 70px;
  width: 70px;
  border-radius: 100%;
  margin: 0 ${ms(-5)} 0 0;
`

const Figure = styled.figure`
  display: flex;
  align-items: center;
  margin: 0;
`

const StyledLink = styled(Link)`
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  font-size: ${ms(0)};
`
const StyledParagraphText = styled(ParagraphText)`
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  font-size: ${ms(1.5)};
  font-weight: 600;
  margin: 0;
  line-height: 1;
`


class UserInfo extends Component {
  render() {
    const {config, data} = this.props
    return (
      <Figure>
        <Avatar sizes={data.meImage.childImageSharp.fluid} />
        <figcaption>
          <StyledParagraphText>{config('userName')}</StyledParagraphText>
          <StyledLink to={`mailto:${config('userEmail')}`}>
            {config('userEmail')}
          </StyledLink>
        </figcaption>
      </Figure>
    )
  }
}

UserInfo.propTypes = {
  config: PropTypes.func.isRequired,
}

const ComponentToExport = withLocales(UserInfo)

export default props => (
  <StaticQuery
    query={graphql`
      query UserInfoQuery {
        meImage: file(relativePath: {eq: "me.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <ComponentToExport {...props} data={data} />}
  />
)
