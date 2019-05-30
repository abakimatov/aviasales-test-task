export type TTicket = {
  arrival_date: string
  arrival_time: string
  carrier: string
  departure_date: string
  departure_time: string
  destination: string
  destination_name: string
  origin: string
  origin_name: string
  price: number
  stops: number
}

export type TRates = {
  USD: number
  EUR: number
}
