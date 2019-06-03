import React from 'react'
import styled from 'styled-components'

import { media } from 'theme'
import { FiltersTitle } from 'ui'
import { getStopLabel } from 'utils/helpers'

import { i18n } from './i18n'
import { CheckboxItem } from './CheckboxItem'

type TProps = {
  selectedStops: number[]
  availableStops: number[]
  onToggleOnly: (stop: number) => void
  onToggleAll: (checked: boolean) => void
  onToggleCheckbox: (stop: number) => void
}

const Root = styled.div`
  width: 100%;
  display: flex;
  padding: 0 0 15px 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

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
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`

export const StopsControls: React.FC<TProps> = ({
  onToggleAll,
  onToggleOnly,
  selectedStops,
  availableStops,
  onToggleCheckbox
}): JSX.Element => {
  const onToggle = (checkAllCheckbox: boolean) => (
    value: number,
    isChecked: boolean
  ) => {
    return checkAllCheckbox ? onToggleAll(isChecked) : onToggleCheckbox(value)
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
            text="Все"
            value="all"
            disabled={false}
            checkAllItem={true}
            isChecked={allIsChecked}
            onToggleOnly={onToggleOnly}
            onToggle={onToggle(true)}
          />
        )}

        {availableStops.map((el, idx) => {
          const label: string = getStopLabel(el)
          const isChecked: boolean = selectedStops.includes(el)

          return (
            <CheckboxItem
              key={idx}
              value={el}
              text={label}
              isChecked={isChecked}
              onToggleOnly={onToggleOnly}
              disabled={onlyOneStopOption}
              onToggle={onToggle(false)}
            />
          )
        })}
      </CheckboxesWrap>
    </Root>
  )
}
