import React from 'react'
import styled from 'styled-components'

import { Logo } from 'ui'
import { media } from 'theme'

const Root = styled.header`
  width: 100%;
  height: 161px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.desktop`
    height: 100px;
  `};
`

export const Header: React.FC = (): JSX.Element => (
  <Root>
    <Logo />
  </Root>
)
