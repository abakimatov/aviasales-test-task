import React from 'react'
import styled from 'styled-components'

import { RadioButton, FiltersTitle } from 'ui'
import { Currencies } from 'enums'
import { i18n } from './i18n'

type TProps = {
  selectedCurrency: string
  setCurrency: (currency: string) => void
}

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 15px 30px 15px;
`

const RadiosWrap = styled.div`
  margin-top: 11px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CurrenciesControls: React.FC<TProps> = ({
  selectedCurrency,
  setCurrency
}): JSX.Element => {
  const currenciesKeys: string[] = Object.keys(Currencies)

  return (
    <Root>
      <FiltersTitle text={i18n.currenciesTitle} />
      <RadiosWrap>
        {currenciesKeys.map((el, idx) => {
          const value: string = el
          const isChecked: boolean = value === selectedCurrency

          return (
            <RadioButton
              key={idx}
              onToggle={setCurrency}
              value={value}
              checked={isChecked}
              name="currencies"
            />
          )
        })}
      </RadiosWrap>
    </Root>
  )
}
