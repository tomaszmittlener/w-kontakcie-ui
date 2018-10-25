import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils/index'
import {NavLink} from 'react-router-dom'
import {
  H2,
  H3,
  PageSection,
  SectionLayout,
  SectionContent,
  HealthIcon,
  Link,
  FeaturesItems,
} from 'src/components/index'
import {withLocales} from 'src/context/locales'
import {howCanIHelp} from '../../../data/TextLists'

const SectionTitle = styled(H2)`
  text-align: center;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: ${ms(4)} 0 0 0;
  justify-content: center;
  ${({theme: {mq}}) => mq.tablet} {
    flex-flow: row nowrap;
  }
`

const Col = styled.div`
  display: flex;
  flex: ${ms(120)} 0;
  flex-flow: column;
  align-items: center;
  margin: 0 0 ${ms(4)} 0;
  &:last-of-type {
    margin: 0;
  }

  ${({theme: {mq}}) => mq.tablet} {
    flex: ${ms(16)} 0;
    margin: 0;

    &:first-of-type {
      margin: 0 ${ms(4)} 0 0;
    }
  }
`
const Option = styled.div`
  height: 100%;
  padding: ${ms(3)};
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  border: 1px dashed ${({theme: {colors}}) => colors.text};
  ${({theme}) => theme.mq.desktop} {
    margin: 0 0 ${ms(3)} 0;
  }
`

const OptionFigure = styled.figure`
  margin: 0 0 ${ms(3)} 0;
  display: flex;
  justify-content: center;
  svg {
    height: ${ms(9)};
  }
`
const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-indent: 0;
  height: 100%;
`
const ReadMoreLink = styled(Link)`
  margin: ${ms(2)} auto 0 auto;
  display: inline-block;
  text-align: center;
  color: ${({theme: {colors}}) => colors.primary};
`

const OptionTitle = styled(H3)`
  margin: 0 0 ${ms(2)} 0;
  display: block;
  text-align: center;
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
                {howCanIHelp.map((option, index) => (
                  <Col key={`home-col-${index}`}>
                    <Option>
                      <NavLink to={option.link}>
                        <OptionFigure>
                          {option.img}
                        </OptionFigure>
                      </NavLink>
                      <OptionTitle>{option.title}</OptionTitle>
                      <DescriptionList>
                        <FeaturesItems bullets={option.bullets} small />
                      </DescriptionList>
                      <ReadMoreLink to="/therapy">Czytaj wiecej</ReadMoreLink>
                    </Option>
                  </Col>
                ))}
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
