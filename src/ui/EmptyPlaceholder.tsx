import React from 'react'
import styled from 'styled-components'

import { i18n } from './i18n'

const Root = styled.div`
  width: 100%;
  padding: 30px 0 0 0;
  display: flex;
  justify-content: center;
`

const Text = styled.span`
  text-align: center;
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.darkText};
`

export const EmptyPlaceholder: React.FC = (): JSX.Element => (
  <Root>
    <Text>{i18n.emptyMessage}</Text>
  </Root>
)
