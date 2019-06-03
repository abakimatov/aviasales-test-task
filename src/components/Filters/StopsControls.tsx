import React from 'react'
import styled from 'styled-components'

import { FiltersTitle } from 'ui'
import { media } from 'theme'
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
  width: 100%;

  ${media.wide`
    padding: 15px 0;
  `};
`

const TitleWrap = styled.span`
  padding-left: 15px;
  margin-bottom: 7px;

  ${media.wide`
    line-height: 1;
    margin-bottom: 0;
    padding-right: 15px;
  `};
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
  const getTextItem = (stop: number): string => {
    const stringFirstPart = stop === 0 ? `Без` : stop

    return `${stringFirstPart} ${getStopPluralForm(stop)}`
  }

  const onToggle = (checkAll: boolean) => (
    value: number,
    isChecked: boolean
  ) => {
    return checkAll ? onToggleAll(isChecked) : onToggleCheckbox(value)
  }

  const allIsChecked: boolean = availableStops.length === selectedStops.length
  const onlyOneStopOption: boolean = availableStops.length < 2

  return (
    <Root>
      <TitleWrap>
        <FiltersTitle text={i18n.stopsTitle} />
      </TitleWrap>
      <CheckboxesWrap>
        {!onlyOneStopOption && (
          <CheckboxItem
            isChecked={allIsChecked}
            disabled={false}
            value="all"
            text="Все"
            onToggle={onToggle(true)}
            checkAllItem={true}
            onToggleOnly={onToggleOnly}
          />
        )}

        {availableStops.map((el, idx) => {
          const isChecked: boolean = selectedStops.includes(el)
          const text: string = getTextItem(el)

          return (
            <CheckboxItem
              key={idx}
              isChecked={isChecked}
              disabled={onlyOneStopOption}
              value={el}
              text={text}
              onToggle={onToggle(false)}
              onToggleOnly={onToggleOnly}
            />
          )
        })}
      </CheckboxesWrap>
    </Root>
  )
}
