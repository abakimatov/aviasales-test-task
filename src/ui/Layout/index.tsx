import React from 'react'
import styled from 'styled-components'

import { media } from 'theme'

import { Header } from './Header'

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  max-width: ${({ theme }) => theme.breakpoints[3]};

  ${media.wide`
    padding: 0 20px;
  `};
`

export const Layout: React.FC = ({ children }): JSX.Element => (
  <Root>
    <Header />
    <Content>{children}</Content>
  </Root>
)
