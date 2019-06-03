import React from 'react'
import styled from 'styled-components'

import { TTicket, TRates } from 'types'
import { Currencies } from 'enums'
import { media } from 'theme'

import { CurrenciesControls } from './CurrenciesControls'
import { StopsControls } from './StopsControls'

type TProps = {
  selectedCurrency: string
  setCurrency: (currency: string) => void
  availableStops: number[]
  selectedStops: number[]
  setSelectedStops: (stops: number[]) => void
  setTickets: (tickets: TTicket[]) => void
  tickets: TTicket[]
  rates: TRates
}

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 242px;
  padding-right: 10px;

  ${media.wide`
    width: 300px;
    padding-right: 0;
    padding-bottom: 30px;
    justify-content: center;
  `};
`

const Content = styled.section`
  width: 232px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radius};

  ${media.wide`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  `};
`

export const Filters: React.FC<TProps> = ({
  selectedCurrency,
  setCurrency,
  availableStops,
  selectedStops,
  setSelectedStops,
  setTickets,
  tickets,
  rates
}) => {
  const applyExchangeRate = (currency: string): TTicket[] => {
    if (currency === Currencies.RUB) return tickets

    const updatedTickets: TTicket[] = tickets.map(el => {
      const newPrice: number = Math.floor(el.price * rates[currency])

      return { ...el, price: newPrice }
    })

    return updatedTickets
  }

  const onToggleCurrency = (currency: string): void => {
    if (currency === selectedCurrency) return

    const updatedTickets = applyExchangeRate(currency)

    setCurrency(currency)
    setTickets(updatedTickets)
  }

  const onToggleAll = (checked: boolean) => {
    const stops: number[] = checked ? [] : availableStops

    setSelectedStops(stops)
  }

  const onToggleCheckbox = (value: number) => {
    const stopIsChecked: boolean = selectedStops.includes(value)

    const stops = !stopIsChecked
      ? [...selectedStops, value]
      : selectedStops.filter(el => el !== value)

    setSelectedStops(stops)
  }

  const onToggleOnly = (value: number) => {
    const updatedStops = availableStops.filter(el => el === value)

    console.log(updatedStops)
    setSelectedStops(updatedStops)
  }

  return (
    <Root>
      <Content>
        <CurrenciesControls
          selectedCurrency={selectedCurrency}
          setCurrency={onToggleCurrency}
        />
        <StopsControls
          availableStops={availableStops}
          selectedStops={selectedStops}
          onToggleCheckbox={onToggleCheckbox}
          onToggleAll={onToggleAll}
          onToggleOnly={onToggleOnly}
        />
      </Content>
    </Root>
  )
}
