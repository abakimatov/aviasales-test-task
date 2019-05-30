import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { media } from 'theme'

import { Header } from './Header'

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 161px 100%;
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

const Content = styled.div`
  display: grid;
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-template-columns: 242px 576px;

  ${media.wide`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-template-columns: 242px 100%;
    padding: 0 20px;
  `};
`

type TProps = {
  children: ReactNode
}

export const Layout: FC<TProps> = ({ children }): JSX.Element => (
  <Root>
    <Header />
    <Main>
      <Content>{children}</Content>
    </Main>
  </Root>
)
