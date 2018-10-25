import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {compose} from 'src/utils/index'
import {
  H2,
  PageSection,
  SectionLayout,
  SectionContent,
  OptionsCards,
} from 'src/components/index'
import {withLocales} from 'src/context/locales'
import {howCanIHelp} from '../../../data/TextLists'

const SectionTitle = styled(H2)`
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
              <OptionsCards data={howCanIHelp} />
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
