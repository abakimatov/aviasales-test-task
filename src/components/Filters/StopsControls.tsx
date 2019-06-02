import React from 'react'
import styled from 'styled-components'

import { FiltersTitle } from 'ui'
import { getStopPluralForm } from 'utils/pluralForm'
import { i18n } from './i18n'

import { CheckboxItem } from './CheckboxItem'

type TProps = {
  availableStops: number[]
  selectedStops: number[]
  onToggleCheckbox: (stop: number) => void
  onToggleAll: (checked: boolean) => void
  onToggleOnly: (stop: number) => void
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 15px 0;
`

const TitleWrap = styled.span`
  padding-left: 15px;
  margin-bottom: 7px;
`
const CheckboxesWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const StopsControls: React.FC<TProps> = ({
  availableStops,
  selectedStops,
  onToggleCheckbox,
  onToggleAll,
  onToggleOnly
}): JSX.Element => {
  const getItemText = (stop: number): string => {
    const stringFirstPart = stop === 0 ? `Без` : stop

    return `${stringFirstPart} ${getStopPluralForm(stop)}`
  }

  const allIsChecked: boolean = availableStops.length === selectedStops.length

  //TODO: need to add disable in case when on only one variant of stops we have
  return (
    <Root>
      <TitleWrap>
        <FiltersTitle text={i18n.stopsTitle} />
      </TitleWrap>
      <CheckboxesWrap>
        <CheckboxItem
          isChecked={allIsChecked}
          disabled={false}
          value="all"
          text="Все"
          onToggle={onToggleAll}
          checkAllItem={true}
          onToggleOnly={onToggleOnly}
        />
        {availableStops.map((el, idx) => {
          const isChecked: boolean = selectedStops.includes(el)
          const text: string = getItemText(el)

          return (
            <CheckboxItem
              key={idx}
              isChecked={isChecked}
              disabled={false}
              value={el}
              text={text}
              onToggle={onToggleCheckbox}
              onToggleOnly={onToggleOnly}
            />
          )
        })}
      </CheckboxesWrap>
    </Root>
  )
}
