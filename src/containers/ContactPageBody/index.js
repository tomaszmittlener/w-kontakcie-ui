import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils/index'
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
} from 'src/components/index'
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
const MapPageSection = styled(PageSection)`
  width: 100%;
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
