import React from 'react'
import styled, {css} from 'styled-components'
import {lighten} from 'polished'
import {Element} from 'react-scroll'

import {ms} from 'utils'

const PADDING = ms(9)

export default styled(
  ({
    noPadding,
    topPadding,
    bottomPadding,
    topBottomPadding,
    dark,
    finalSectionPadding,
    ...otherProps
  }) => <Element {...otherProps} />,
)`
  ${({dark}) =>
    dark &&
    css`
      background-color: ${({theme: {colors}}) =>
        lighten(0.08, colors.secondary)};
    `} ${({topPadding}) =>
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
  ${({finalSectionPadding}) =>
    finalSectionPadding &&
    css`
      padding-bottom: ${ms(13)}};
    `};
`
