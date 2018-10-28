import styled, {css} from 'styled-components'
import {ms} from 'src/utils'
import {lighten} from 'polished'

const PADDING = ms(9)

export default styled.section`
  height: 100%;
  ${({dark}) =>
    dark &&
    css`
      background-color: ${({theme: {colors}}) => lighten(0.2, colors.third)};
    `} ${({theme: {mq}}) => mq.desktop} {
  }

  ${({topPadding}) =>
    topPadding &&
    css`
      padding: ${PADDING} 0 0 0;
    `};

  ${({noPadding}) =>
    noPadding &&
    css`
      padding: 0;
    `};

  ${({bottomPadding}) =>
    bottomPadding &&
    css`
      padding: 0 0 ${PADDING} 0;
    `};
  ${({topBottomPadding}) =>
    topBottomPadding &&
    css`
      padding: ${PADDING} 0;
    `};
  ${({noPadding}) =>
    noPadding &&
    css`
      padding: 0;
    `};
`
