import React, {Component} from 'react'
import styled from 'styled-components'
import {H4} from 'src/components/Headings'
import {ms} from 'src/utils/index'
import config from '../../../data/SiteConfig'

const Container = styled.footer`
  height: 300px;
  padding: ${ms(8)} ${ms(4)} ${ms(1)};
  width: 100%;
  background-color: ${({theme: {colors}}) => colors.primary};
  color: ${({theme: {colors}}) => colors.third};
  text-align: center;
`

const AddressText = styled(H4)`
  font-size: ${ms(1)};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const ExtLink = styled.a`
  font-weight: normal;

  display: block;
  font-size: ${ms(1)};
  text-align: center;
  text-decoration: none;
  color: inherit;
  opacity: 1;
  transition: opacity 300ms linear;
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
  &:hover {
    opacity: 0.7;
  }
`

class Index extends Component {
  render() {
    const {copyright} = config
    if (!copyright) {
      return null
    }
    return (
      <Container>
        <AddressText>Anna Dejewska</AddressText>
        <AddressText>Grunwaldzka 22, 90-220, Gdańsk</AddressText>
        <ExtLink href="tel:+48696412010">tel: 696 41 20 10</ExtLink>
        <ExtLink href="mailto:adejewska1@gmail.com">
          adejewska1@gmail.com
        </ExtLink>
      </Container>
    )
  }
}

export default Index
