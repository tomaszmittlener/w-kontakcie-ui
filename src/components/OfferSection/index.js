import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {compose} from 'src/utils'
import {withLocales} from 'src/context/locales'
import {H3} from 'src/components/Headings'
import {ParagraphText} from 'src/components/Text'

const Article = styled.article`
  max-width: 1000px;
  margin: 0 auto;
`

const OfferSection = ({t}) => (
  <Article>
    <H3>Konsultacja psychologiczna</H3>
    <ParagraphText>
      Zwykle od jednego do trzech spotkań, w trakcie których można określić
      charakter zgłaszanych problemów oraz wybrać odpowiednią formę pomocy tj.
      psychoterapię indywidualną, grupową, wsparcie psychologiczne czy dodatkowo
      konsultację psychiatryczną.
    </ParagraphText>
    <H3>Psychoterapia indywidualna</H3>
    <ParagraphText>
      Rozpoczęcie psychoterapii poprzedzone jest konsultacją, która pozwala na
      rozeznanie się w trudnościach i podjęciu najlepszej formy pomocy. Praca
      terapeutyczna opiera się na cyklu systematycznych spotkań, które odbywają
      się raz lub dwa razy w tygodniu. Psychoterapia to forma pomocy dostosowana
      do potrzeb pacjenta, mająca na celu trwałe zmiany w funkcjonowaniu danej
      osoby oraz poprawę jakości jej życia. Psychoterapia polega na szczególnej
      formie rozmowy, o określonych zasadach i warunkach, które zostają ustalone
      na początku kontaktu.{' '}
    </ParagraphText>
  </Article>
)

OfferSection.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(withLocales)(OfferSection)
