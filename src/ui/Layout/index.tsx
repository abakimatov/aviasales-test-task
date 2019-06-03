import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { media } from 'theme'

import { Header } from './Header'

const Root = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`

const Main = styled.div`
  flex: 1;
  display: flex;

  width: ${({ theme }) => theme.breakpoints[3]};

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
