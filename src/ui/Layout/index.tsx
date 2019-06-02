import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { media } from 'theme'

import { Header } from './Header'

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Main = styled.div`
  display: flex;
  width: ${({ theme }) => theme.breakpoints[3]};
  height: calc(100% - 161px);

  ${media.wide`
    width: 100%;
  `};
`

type TProps = {
  children: ReactNode
}

export const Layout: FC<TProps> = ({ children }): JSX.Element => (
  <Root>
    <Header />
    <Main>{children}</Main>
  </Root>
)
