import React from 'react'
import styled from 'styled-components'

const Root = styled.li`
  width: 100%;
  transition: box-shadow 0.2s;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.pageBackground};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radius};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hoveredCard};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const Ticket: React.FC = (): JSX.Element => <Root />
