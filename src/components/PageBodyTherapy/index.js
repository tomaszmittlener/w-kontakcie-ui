import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import {H2, H3, ParagraphText} from 'src/components'
import {withLocales} from 'src/context/locales'
import map from 'lodash/map'
import {therapy, workAreas, therapyPracticalInfo} from '../../../data/TextLists'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1500px;
  margin: 0 auto;
  min-height: unset;
  padding: ${ms(2)};
`

class PageBodyTherapy extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Container>
        {map(therapy, (section, sectionIndex) => (
          <Fragment key={`therapy-${section.title}-${sectionIndex}`}>
            {section.title && <H2>{section.title}</H2>}
            <ParagraphText>{section.description}</ParagraphText>
          </Fragment>
        ))}
        <H2>{t('therapyPage.workAreaSection.title')}</H2>
        {map(workAreas, (area, areaIndex) => (
          <Fragment key={`therapy-${area.title}-${areaIndex}`}>
            {area.title && <H3>{area.title}</H3>}
            <ParagraphText>{area.description}</ParagraphText>
            <ul>
              {map(area.bullets, (bullet, bulletIndex) => (
                <li key={`therapy-${area.title}-${areaIndex}-${bulletIndex}`}>
                  {bullet}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
        <H2>{t('therapyPage.practicalInfoSection.title')}</H2>
        {map(therapyPracticalInfo, (info, areaIndex) => (
          <Fragment key={`practicalInfo-${info.title}-${areaIndex}`}>
            {info.title && <H3>{info.title}</H3>}
            <ParagraphText>{info.description}</ParagraphText>
            <ul>
              {map(info.bullets, (bullet, bulletIndex) => (
                <li key={`therapy-${info.title}-${areaIndex}-${bulletIndex}`}>
                  {bullet}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </Container>
    )
  }
}

PageBodyTherapy.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(withLocales)(PageBodyTherapy)
