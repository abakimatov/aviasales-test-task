import dayjs from 'dayjs'
import 'dayjs/locale/ru'

import { TTicket, TNormalizedTicket } from 'types'

type TGetStopLabel = (n: number) => string
type TGetStopPluralForm = (n: number) => string

export const getStopPluralForm: TGetStopPluralForm = (n: number): string => {
  const stopsWords: string[] = ['пересадка', 'пересадки', 'пересадок']

  return stopsWords[
    n % 10 === 1 && n % 100 !== 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
  ]
}

export const getStopLabel: TGetStopLabel = (n: number): string => {
  const stringFirstPart: number | string = n === 0 ? `Без` : n

  return `${stringFirstPart} ${getStopPluralForm(n)}`
}

export const formatDateStringForIE10 = (date: string): string =>
  date.split('.').join('/')

export const prepareTicketData = (data: TTicket): TNormalizedTicket => {
  const {
    stops,
    price,
    origin,
    origin_name,
    destination,
    arrival_date,
    arrival_time,
    departure_time,
    departure_date,
    destination_name
  } = data

  const stopsCount: string | null =
    stops > 0 ? `${stops} ${getStopPluralForm(stops)}` : null
  const originRaw: string = `${origin}, ${origin_name}`
  const destinationRaw: string = `${destination_name}, ${destination}`
  const departureDate: string = dayjs(formatDateStringForIE10(departure_date))
    .locale('ru')
    .format('D MMM YYYY, ddd')
  const arrivalDate: string = dayjs(formatDateStringForIE10(arrival_date))
    .locale('ru')
    .format('D MMM YYYY, ddd')

  return {
    price,
    originRaw,
    stopsCount,
    arrivalDate,
    departureDate,
    destinationRaw,
    arrivalTime: arrival_time,
    departureTime: departure_time
  }
}
