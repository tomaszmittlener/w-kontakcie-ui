import React from 'react'
import styled from 'styled-components'
import {Logo, SpanText} from 'src/components/index'
import {ms} from 'src/utils'

const gradientColors = ['#25516C', '#2B768A', '#2FBB92']

const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
`

const StyledLogo = styled(Logo)`
  height: 100%;
  width: auto;
  opacity: 0.3;
  pointer-events: none;
  position: absolute;
  left: 0;
  #slice_1 {
    fill: ${gradientColors[0]};
  }
  #slice_2 {
    fill: url(#gradient-horizontal-slice_2);
  }
  #slice_3 {
    fill: url(#gradient-horizontal-slice_3);
  }
  #slice_4 {
    fill: ${gradientColors[2]};
  }
`

const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 13% 0 0 43%;
  white-space: nowrap;
`

const Text = styled(SpanText)`
  font-size: ${ms(6)};
  line-height: ${ms(8)};
`

const NameText = styled(SpanText)`
  font-size: ${ms(10)};
  line-height: ${ms(10)};
`

const Intro = () => (
  <Container>
    <StyledLogo />
    <TextContainer>
      <Text>Gabinet Psychoterapii i Rozwoju Osobistego</Text>
      <NameText>w relacji</NameText>
    </TextContainer>
  </Container>
)

export default Intro
