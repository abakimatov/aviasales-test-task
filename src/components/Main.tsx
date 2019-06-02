import React, { useState } from 'react'
import styled from 'styled-components'

import { media } from 'theme'
import { TTicket, TRates } from 'types'
import { Currencies } from 'enums'

import { Filters } from './Filters'
import { List } from './List'

type TProps = {
  tickets: TTicket[]
  rates: TRates
}

const Root = styled.div`
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

export const Main: React.FC<TProps> = ({ tickets, rates }): JSX.Element => {
  const availableStops = [...new Set(tickets.map(el => el.stops))].sort()

  const [selectedCurrency, setCurrency] = useState<string>(Currencies.RUB)
  const [ticketsList, setTicketsList] = useState(tickets)
  const [selectedStops, setSelectedStops] = useState<number[]>(availableStops)

  return (
    <Root>
      <Filters
        selectedCurrency={selectedCurrency}
        setCurrency={setCurrency}
        availableStops={availableStops}
        selectedStops={selectedStops}
        setSelectedStops={setSelectedStops}
        setTickets={setTicketsList}
        tickets={tickets}
        rates={rates}
      />
      <List />
    </Root>
  )
}
