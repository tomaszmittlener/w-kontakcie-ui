import React from 'react'
import styled from 'styled-components'
import {Logo, SpanText} from 'src/components/index'
import {ms} from 'src/utils'
import {withLocales} from 'src/context'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledLogo = styled(Logo)`
  width: ${ms(8)};
  ${({theme: {mq}}) => mq.desktop} {
    width: ${ms(10)};
  }
`

const Text = styled(SpanText)`
  display: flex;
  flex-direction: column;
  font-size: ${ms(5)};
  line-height: ${ms(8)};
  text-align: center;
  color: ${({theme: {colors}}) => colors.text};
  font-family: ${({
    theme: {
      typo: {fontFamily},
    },
  }) => fontFamily.secondary};
`

const Intro = ({t}) => (
  <Container>
    <StyledLogo withText withoutHover />
    <Text>{t('company.type')}</Text>
  </Container>
)

export default withLocales(Intro)
