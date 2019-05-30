import React from 'react'
import styled from 'styled-components'

import { Logo } from 'ui'

const Root = styled.header`
  width: 100%;
  height: 161px;
  grid-column-start: 1;
  grid-column-end: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header: React.FC = (): JSX.Element => (
  <Root>
    <Logo />
  </Root>
)
