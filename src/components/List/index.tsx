import React from 'react'
import styled from 'styled-components'

import { media } from 'theme'
import { TTicket } from 'types'
import { EmptyPlaceholder } from 'ui'

import { Ticket } from './Ticket'

type TProps = {
  tickets: TTicket[]
  selectedStops: number[]
  selectedCurrency: string
}

const Root = styled.ul`
  flex: 1;
  margin: 0;
  height: 100%;
  list-style: none;
  padding-left: 10px;

  ${media.wide`
    padding-left: 0;
   `};
`

export const List: React.FC<TProps> = ({
  tickets,
  selectedStops,
  selectedCurrency
}): JSX.Element => {
  const updatedTickets: TTicket[] = tickets
    .filter(el => selectedStops.includes(el.stops))
    .sort((a, b) => a.price - b.price)
  const ticketsIsEmpty: boolean = updatedTickets.length < 1

  return (
    <Root>
      {updatedTickets.map((el, idx) => (
        <Ticket key={idx} data={el} currency={selectedCurrency} />
      ))}
      {ticketsIsEmpty && <EmptyPlaceholder />}
    </Root>
  )
}
