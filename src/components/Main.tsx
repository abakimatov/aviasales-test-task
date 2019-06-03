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
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;

  ${media.wide`
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
      <List
        tickets={ticketsList}
        selectedCurrency={selectedCurrency}
        selectedStops={selectedStops}
      />
    </Root>
  )
}
