import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { media } from 'theme'

import { Header } from './Header'

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 161px calc(100% - 161px);
`

const Main = styled.main`
  display: grid;
  grid-row-start: 2;
  grid-row-end: 2;

  ${({ theme }) => `grid-template-columns: auto ${theme.breakpoints[3]} auto`};

  ${media.wide`
    grid-template-columns: 100%;
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
