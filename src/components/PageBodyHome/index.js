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
} from 'src/components'
import {withLocales} from 'src/context/locales'

const SectionTitle = styled(H2)`
  text-align: center;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: ${ms(4)} 0 0 0;
`
const Option = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 ${ms(3)};
  margin: 0 0 ${ms(8)} 0;
  width: 250px;
  ${({theme}) => theme.mq.desktop} {
    margin: 0 0 ${ms(3)} 0;
  }
`

const OptionFigure = styled.figure`
  margin: 0 0 ${ms(3)} 0;
`
const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-indent: 0;
`
const ReadMoreLink = styled(Link)`
  margin: ${ms(2)} 0 0 0;
  display: inline-block;
  color: ${({theme: {colors}}) => colors.primary};
`

const OptionTitle = styled(H3)`
  margin: 0 0 ${ms(2)} 0;
  display: block;
`
class PageBodyHome extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Fragment>
        <PageSection>
          <SectionLayout>
            <SectionContent>
              <SectionContent>
                <SectionTitle>Jak mogę pomóc?</SectionTitle>
              </SectionContent>
              <OptionsContainer>
                <Option>
                  <NavLink to="/therapy">
                    <OptionFigure>
                      <HealthIcon />
                    </OptionFigure>
                  </NavLink>
                  <OptionTitle>Psychoterapia</OptionTitle>
                  <DescriptionList>
                    <li>Trudności w relacjach</li>
                    <li>Depresja</li>
                    <li>Kryzysy i trudności osobiste</li>
                    <li>Lęki, nerwice</li>
                    <li>Trudności w pracy</li>
                  </DescriptionList>
                  <ReadMoreLink to="/therapy">Czytaj wiecej</ReadMoreLink>
                </Option>
                <Option>
                  <NavLink to="/coaching">
                    <OptionFigure>
                      <WhistleIcon />
                    </OptionFigure>
                  </NavLink>
                  <OptionTitle>Coaching</OptionTitle>
                  <DescriptionList>
                    <li>Prowadzenie szkoleń w zakresie:</li>
                    <li>Business Coaching</li>
                    <li>Life coaching</li>
                  </DescriptionList>
                  <ReadMoreLink to="/coaching">Czytaj wiecej</ReadMoreLink>
                </Option>
              </OptionsContainer>
            </SectionContent>
          </SectionLayout>
        </PageSection>
      </Fragment>
    )
  }
}

PageBodyHome.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(withLocales)(PageBodyHome)
