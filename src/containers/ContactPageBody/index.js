import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'utils'
import {
  H2,
  H4,
  PageSection,
  SectionLayout,
  SectionContent,
  Link,
  Map,
} from 'components'
import {withLocales} from 'context/locales'

const SectionTitle = styled(H2)`
  text-align: center;
  margin: 0 0 ${ms(8)} 0;
`

const Option = styled.div`
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
`

const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  text-indent: 0;
  margin: 0 0 ${ms(3)} 0;
  text-align: center;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
  }
`

const OptionTitle = styled(H4)`
  margin: 0 0 ${ms(-4)} 0;
  display: block;
  text-align: center;
  ${({theme: {mq}}) => mq.desktop} {
    text-align: left;
  }
`
const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin: ${ms(6)} 0 0 0;

  ${({theme: {mq}}) => mq.desktop} {
    margin: 0 0 0 ${ms(6)};
  }
`

const WayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({theme: {mq}}) => mq.desktop} {
    flex-direction: row;
    align-items: unset;
  }
`

const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0;
  flex: 3;
`

class PageBodyContact extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection topBottomPadding finalSectionPadding>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>Znajdz Gabinet</SectionTitle>

              <WayContainer>
                <MapContainer>
                  <Map />
                </MapContainer>
                <OptionsWrapper>
                  <Option>
                    <OptionTitle>Adres</OptionTitle>
                    <DescriptionList>
                      <Link to="https://www.google.com/maps/place/Ludwika+Wary%C5%84skiego+40c,+80-980+Gda%C5%84sk,+Polska/@54.3789796,18.6109153,18z/data=!3m1!4b1!4m5!3m4!1s0x46fd749674506061:0x8465d06b7b224b1e!8m2!3d54.3789796!4d18.6120096?hl=pl-PL">
                        <li>{t('company.address')}</li>
                        <li>{t('company.address2')}</li>
                      </Link>
                    </DescriptionList>
                  </Option>
                  <Option>
                    <OptionTitle>Godziny otwarcia</OptionTitle>
                    <DescriptionList>
                      <li>{t('company.openHours')}</li>
                    </DescriptionList>
                  </Option>
                </OptionsWrapper>
              </WayContainer>
            </SectionContent>
          </SectionLayout>
        </PageSection>
      </Fragment>
    )
  }
}

PageBodyContact.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(withLocales)(PageBodyContact)
