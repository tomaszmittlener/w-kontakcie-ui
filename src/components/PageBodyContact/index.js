import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import {NavLink} from 'react-router-dom'
import {
  H2,
  H3,
  H4,
  PageSection,
  ParagraphText,
  SectionLayout,
  SectionContent,
  HealthIcon,
  WhistleIcon,
  Link,
  Map,
  EarthIcon,
  LocationIcon,
  RoadSignIcon,
} from 'src/components'
import {withLocales} from 'src/context/locales'

const SectionTitle = styled(H2)`
  text-align: center;
`

const Option = styled.div`
  text-align: left;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
`

const DescriptionList = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
  text-indent: 0;
  margin: 0 0 ${ms(3)} 0;
`

const OptionTitle = styled(H4)`
  margin: 0 0 ${ms(-4)} 0;
  display: block;
`
const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`
const IconContainer = styled.figure`
  display: flex;
  justify-content: flex-end;
  padding: 0 ${ms(8)} 0 0;
  flex: 1;
  margin: 0;

  > svg {
    height: 200px;
  }
`
const WayContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`

class PageBodyContact extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionTitle>Znajdz Gabinet</SectionTitle>
            </SectionContent>
          </SectionLayout>
        </PageSection>

        <PageSection>
          <SectionLayout>
            <SectionContent>
              <WayContainer>
                <IconContainer>
                  <LocationIcon />
                </IconContainer>
                <OptionsWrapper>
                  <Option>
                    <OptionTitle>Adres</OptionTitle>
                    <DescriptionList>
                      <li>{t('company.address')}</li>
                      <li>{t('company.address2')}</li>
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

        <PageSection>
          <SectionLayout>
            <SectionContent>
              <MapContainer>
                <Map />
              </MapContainer>
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
