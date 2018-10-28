import React, {Component} from 'react'
import styled from 'styled-components'
import {H4} from 'src/components/Headings/index'
import {compose, ms} from 'src/utils/index'
import {withLocales, withLocalesContextProvider} from 'src/context'
import {Link} from 'src/components'
import config from '../../../data/SiteConfig'

const Container = styled.footer`
  list-style: none;
  height: 300px;
  padding: ${ms(8)} ${ms(4)} ${ms(1)};
  width: 100%;
  background-color: ${({theme: {colors}}) => colors.primary};
  color: ${({theme: {colors}}) => colors.canvas};
  text-align: center;
  display: flex;
  flex-direction: column;
`

const AddressText = styled(H4)`
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const AddressLink = styled(Link)`
  color: ${({theme: {colors}}) => colors.canvas};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

class Footer extends Component {
  render() {
    const {copyright} = config
    const {t} = this.props
    if (!copyright) {
      return null
    }
    return (
      <Container>
        <AddressText>{t('owner.name')}</AddressText>
        <AddressLink to="https://www.google.com/maps/place/Ludwika+Wary%C5%84skiego+40c,+80-980+Gda%C5%84sk,+Polska/@54.3789796,18.6109153,18z/data=!3m1!4b1!4m5!3m4!1s0x46fd749674506061:0x8465d06b7b224b1e!8m2!3d54.3789796!4d18.6120096?hl=pl-PL">
          <li>{t('company.address')}</li>
          <li>{t('company.address2')}</li>
        </AddressLink>
        <AddressLink to={`tel:${t('owner.phone')}`}>
          {t('owner.phone')}
        </AddressLink>
        <AddressLink to={`mailto:${t('owner.email')}`}>
          {t('owner.email')}
        </AddressLink>
      </Container>
    )
  }
}

export default compose(
  withLocalesContextProvider,
  withLocales,
)(Footer)
