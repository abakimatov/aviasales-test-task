export type TTicket = {
  price: number
  stops: number
  origin: string
  carrier: string
  origin_name: string
  destination: string
  arrival_time: string
  arrival_date: string
  departure_time: string
  departure_date: string
  destination_name: string
}

export type TRates = {
  [key: string]: number
}

export type TNormalizedTicket = {
  price: number
  originRaw: string
  arrivalDate: string
  arrivalTime: string
  departureDate: string
  departureTime: string
  destinationRaw: string
  stopsCount: string | null
}
