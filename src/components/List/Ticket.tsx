import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

import { TTicket } from 'types'
import { media } from 'theme'
import { getStopPluralForm } from 'utils/pluralForm'

import { Content } from './Content'
import { Description } from './Description'

type TProps = {
  data: TTicket
  currency: string
}

const Root = styled.li`
  width: 100%;
  transition: box-shadow 0.2s;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radius};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hoveredCard};
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${media.tablet`
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
  `};
`

export const Ticket: React.FC<TProps> = ({ data, currency }): JSX.Element => {
  const {
    price,
    departure_time,
    origin,
    origin_name,
    departure_date,
    arrival_date,
    arrival_time,
    destination,
    destination_name,
    stops
  } = data
  const stopsCount: string | null =
    stops > 0 ? `${stops} ${getStopPluralForm(stops)}` : null
  const originRaw: string = `${origin}, ${origin_name}`
  const destinationRaw: string = `${destination_name}, ${destination}`
  const departureDate: string = dayjs(departure_date)
    .locale('ru')
    .format('D MMM YYYY, ddd')
  const arrivalDate: string = dayjs(arrival_date)
    .locale('ru')
    .format('D MMM YYYY, ddd')

  return (
    <Root>
      <Content price={price} currency={currency} />
      <Description
        stopsCount={stopsCount}
        arrivalDate={arrivalDate}
        arrivalTime={arrival_time}
        departureDate={departureDate}
        departureTime={departure_time}
        destinationRaw={destinationRaw}
        originRaw={originRaw}
      />
    </Root>
  )
}
