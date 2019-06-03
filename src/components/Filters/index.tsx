import React from 'react'
import styled from 'styled-components'

import { media } from 'theme'
import { TTicket, TRates } from 'types'

import { Currencies } from '../../constants'
import { FiltersTitle, RadioButton } from 'ui'

import { i18n } from './i18n'
import { StopsControls } from './StopsControls'

type TProps = {
  rates: TRates
  tickets: TTicket[]
  selectedStops: number[]
  availableStops: number[]
  selectedCurrency: string
  setCurrency: (currency: string) => void
  setTickets: (tickets: TTicket[]) => void
  setSelectedStops: (stops: number[]) => void
}

const Root = styled.div`
  width: 242px;
  display: flex;
  padding-right: 10px;
  align-items: flex-start;
  justify-content: flex-start;

  ${media.wide`
    width: 300px;
    padding-right: 0;
    padding-bottom: 30px;
    justify-content: center;
  `};
`

const Content = styled.section`
  width: 232px;

  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  background-color: ${({ theme }) => theme.colors.white};

  ${media.wide`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  `};
`

const CurrenciesControls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px 15px 30px 15px;

  ${media.wide`
    width: unset;
  `};
`

const RadiosWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 11px;
  align-items: center;
  justify-content: space-between;

  ${media.wide`
    width: unset;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `};
`

export const Filters: React.FC<TProps> = ({
  rates,
  tickets,
  setTickets,
  setCurrency,
  selectedStops,
  availableStops,
  selectedCurrency,
  setSelectedStops
}) => {
  const applyExchangeRate = (currency: string): TTicket[] => {
    if (currency === Currencies.RUB) return tickets

    const updatedTickets: TTicket[] = tickets.map(el => {
      const exchangedPrice: number = Math.floor(el.price * rates[currency])

      return { ...el, price: exchangedPrice }
    })

    return updatedTickets
  }

  const onToggleCurrency = (currency: string): void => {
    if (currency === selectedCurrency) return

    const updatedTickets = applyExchangeRate(currency)

    setCurrency(currency)
    setTickets(updatedTickets)
  }

  const onToggleAll = (isChecked: boolean): void => {
    const pickedStops: number[] = isChecked ? [] : availableStops

    setSelectedStops(pickedStops)
  }

  const onToggleCheckbox = (value: number) => {
    const stopIsChecked: boolean = selectedStops.includes(value)

    const pickedStops: number[] = !stopIsChecked
      ? [...selectedStops, value]
      : selectedStops.filter(el => el !== value)

    setSelectedStops(pickedStops)
  }

  const onToggleOnly = (value: number) => {
    const pickedStops: number[] = availableStops.filter(el => el === value)

    setSelectedStops(pickedStops)
  }

  const currenciesKeys: string[] = Object.keys(Currencies)

  return (
    <Root>
      <Content>
        <CurrenciesControls>
          <FiltersTitle text={i18n.currenciesTitle} />
          <RadiosWrap>
            {currenciesKeys.map((key, idx) => {
              const value: string = Currencies[key]
              const isChecked: boolean = value === selectedCurrency

              return (
                <RadioButton
                  key={idx}
                  value={value}
                  name="currencies"
                  checked={isChecked}
                  onToggle={onToggleCurrency}
                />
              )
            })}
          </RadiosWrap>
        </CurrenciesControls>
        <StopsControls
          onToggleAll={onToggleAll}
          onToggleOnly={onToggleOnly}
          selectedStops={selectedStops}
          availableStops={availableStops}
          onToggleCheckbox={onToggleCheckbox}
        />
      </Content>
    </Root>
  )
}
