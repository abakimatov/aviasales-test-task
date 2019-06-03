import { useEffect, useState } from 'react'

import { TRates, TTicket } from 'types'
import { getCurrencies } from 'utils/exchangeApi'

type TData = {
  rates: TRates
  tickets: TTicket[]
}
type TResult = {
  data: TData
  loading: boolean
}
type TUseFetch = () => TResult

export const useFetch: TUseFetch = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [ticketsArr, setTickets] = useState<[] | TTicket[]>([])
  const [rates, setRates] = useState<TRates>({ USD: 1, EUR: 1 })

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      const { tickets } = await import('../data.json')
      const updatedRates = await getCurrencies()

      setTickets(tickets)
      setRates(updatedRates)
      setLoading(false)
    })()
  }, [])

  return { data: { tickets: ticketsArr, rates }, loading }
}
