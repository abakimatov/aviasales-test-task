import React, { useState } from 'react'
import styled from 'styled-components'

import { media } from 'theme'
import { TTicket, TRates } from 'types'

import { List } from './List'
import { Filters } from './Filters'
import { Currencies } from '../constants'

type TProps = {
  rates: TRates
  tickets: TTicket[]
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${media.wide`
    padding: 0 20px;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  `};
`

export const Main: React.FC<TProps> = ({ tickets, rates }): JSX.Element => {
  const availableStops = [...new Set(tickets.map(el => el.stops))].sort()

  const [ticketsList, setTicketsList] = useState(tickets)
  const [selectedCurrency, setCurrency] = useState<string>(Currencies.RUB)
  const [selectedStops, setSelectedStops] = useState<number[]>(availableStops)

  const ticketsIsEmpty: boolean = ticketsList.length === 0

  return (
    <Root>
      {!ticketsIsEmpty && (
        <Filters
          rates={rates}
          tickets={tickets}
          setCurrency={setCurrency}
          setTickets={setTicketsList}
          selectedStops={selectedStops}
          availableStops={availableStops}
          selectedCurrency={selectedCurrency}
          setSelectedStops={setSelectedStops}
        />
      )}
      <List
        tickets={ticketsList}
        selectedStops={selectedStops}
        selectedCurrency={selectedCurrency}
      />
    </Root>
  )
}
