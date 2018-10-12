import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'
import Layout from 'src/layout'
import {locationPropTypesShape} from 'src/utils/PropTypes'
import {PageSectionTitle, H1, H2, H3} from 'src/components'
import config from '../../data/SiteConfig'

class TherapyPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} withTopPadding>
        <Helmet title={`Terapia | ${config.siteTitle}`} />
        <PageSectionTitle>PSYCHOTERAPIA</PageSectionTitle>
        <H1>Rozwój Osobisty</H1>
        <H2>Trudności w relacjach</H2>
        <ul>
          <li>brak porozumienia w związku</li>
          <li> brak asertywności</li>
          <li>doświadczenie przemocy fizycznej lub psychicznej</li>
          <li>nieśmiałość</li>
          <li>unikanie odpowiedzialności lub nadodpowiedzialność</li>
          <li>lęk przed bliskością</li>
        </ul>
        <H2>Lęki, nerwice</H2>
        <ul>
          <li>niepokój, ataki paniki</li>
          <li>rozdrażnienie</li>
          <li>wahania nastrojów</li>
          <li>problemy ze snem</li>
        </ul>

        <H1>Jak rozpocząć terapię</H1>
        <H2>Informacje praktyczne</H2>
        <ul>
          <li>
            <H3>Pracę zaczynam od konsultacji.</H3>
          </li>
          <ul>
            <li>
              Konsultacje umożliwiają mi zapoznanie się z problemem oraz
              pozwalają ustalić cel i obszar wspólnej pracy, czyli ustalić
              kontrakt.
            </li>
            <li>
              Dla klienta konsultacja to czas na decyzję, czy jestem terapeutą,
              z którym chce pracować.
            </li>
            <li>Konsultacja trwa 50 min</li>
          </ul>
          <li>
            <H3>
              Po konsultacjach i ustaleniu kontraktu rozpoczyna się proces
              terapeutyczny.
            </H3>
          </li>
          <ul>
            <li>Sesje odbywają się raz w tygodniu.</li>
            <li>Sesja trwa 50 min.</li>
          </ul>
        </ul>
      </Layout>
    )
  }
}

TherapyPage.propTypes = {
  location: locationPropTypesShape.isRequired,
}

export default TherapyPage
