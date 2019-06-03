import React from 'react'
import styled from 'styled-components'

import { media } from 'theme'
import { TTicket, TNormalizedTicket } from 'types'
import { prepareTicketData } from 'utils/helpers'

import { Content } from './Content'
import { Description } from './Description'

type TProps = {
  data: TTicket
  currency: string
}

const Root = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
  transition: box-shadow 0.2s;
  justify-content: flex-start;

  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hoveredCard};
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${media.tablet`
    align-items: center;
    justify-content: flex-start;
    flex-direction: column-reverse;
  `};
`

export const Ticket: React.FC<TProps> = ({ data, currency }): JSX.Element => {
  const updatedData: TNormalizedTicket = prepareTicketData(data)

  return (
    <Root>
      <Content price={updatedData.price} currency={currency} />
      <Description {...updatedData} />
    </Root>
  )
}
