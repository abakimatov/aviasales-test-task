import React from 'react'
import styled from 'styled-components'

import { i18n } from './i18n'

const Root = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0 0 0;
  justify-content: center;
`

const Text = styled.span`
  flex: 1;
  text-align: center;

  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes[5]};
`

export const EmptyPlaceholder: React.FC = (): JSX.Element => (
  <Root>
    <Text>{i18n.emptyMessage}</Text>
  </Root>
)
