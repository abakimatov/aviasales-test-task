import axios from 'axios'

import { TRates } from 'types'

type TParams = {
  base: string
  symbols: string
}
type TConfig = {
  params: TParams
}

type TData = {
  base: string
  date: string
  rates: TRates
}

type TGetCurrencies = () => Promise<TRates>

const { REACT_APP_EXCHANGE_API_URL } = process.env
const url: string = REACT_APP_EXCHANGE_API_URL ? REACT_APP_EXCHANGE_API_URL : ''

const config: TConfig = {
  params: {
    base: 'RUB',
    symbols: 'USD,EUR'
  }
}

export const getCurrencies: TGetCurrencies = async () => {
  const defaultRates: TRates = {
    USD: 0.0153926125,
    EUR: 0.0138248721
  }

  try {
    const res = await axios.get(url, config)
    const data: TData = res.data

    return data.rates
  } catch (e) {
    console.error(e)
    return defaultRates
  }
}
