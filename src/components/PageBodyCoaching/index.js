import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ms, compose} from 'src/utils'
import {H2, H3, ParagraphText} from 'src/components'
import {withLocales} from 'src/context/locales'
import map from 'lodash/map'
import {
  businessCoachingAdvantages,
  lifeCoachingAdvanatages,
} from '../../../data/TextLists'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1500px;
  margin: 0 auto;
  min-height: unset;
  padding: ${ms(2)};
`

class PageBodyCoaching extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Container>
        <H2>{t('coachingPage.businessCoachingSection.title')}</H2>
        <ParagraphText>
          {t('coachingPage.businessCoachingSection.infoText')}
        </ParagraphText>
        <ParagraphText>
          {t('coachingPage.businessCoachingSection.infoText2')}
        </ParagraphText>
        <ParagraphText>
          {t('coachingPage.businessCoachingSection.infoText3')}
        </ParagraphText>
        {map(businessCoachingAdvantages, (entry, entryIndex) => (
          <Fragment key={`therapy-${entry.title}-${entryIndex}`}>
            {entry.title && <H3>{entry.title}</H3>}
            <ParagraphText>{entry.description}</ParagraphText>
            <ul>
              {map(entry.bullets, (bullet, bulletIndex) => (
                <li key={`therapy-${entry.title}-${entryIndex}-${bulletIndex}`}>
                  {bullet}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
        <H2>{t('coachingPage.lifeCoachingSection.title')}</H2>
        <ParagraphText>
          {t('coachingPage.lifeCoachingSection.infoText')}
        </ParagraphText>
        <ParagraphText>
          {t('coachingPage.lifeCoachingSection.infoText2')}
        </ParagraphText>
        <ParagraphText>
          {t('coachingPage.lifeCoachingSection.infoText3')}
        </ParagraphText>
        {map(lifeCoachingAdvanatages, (entry, entryIndex) => (
          <Fragment key={`practicalInfo-${entry.title}-${entryIndex}`}>
            {entry.title && <H3>{entry.title}</H3>}
            <ParagraphText>{entry.description}</ParagraphText>
            <ul>
              {map(entry.bullets, (bullet, bulletIndex) => (
                <li key={`therapy-${entry.title}-${entryIndex}-${bulletIndex}`}>
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

PageBodyCoaching.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(withLocales)(PageBodyCoaching)
