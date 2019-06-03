import React from 'react'
import styled from 'styled-components'

import activeArrow from 'ui/Icons/checkboxActiveArrow.svg'
import disabledArrow from 'ui/Icons/checkboxDisableArrow.svg'

import { i18n } from './i18n'

type TProps = {
  value: any
  text: string
  disabled: boolean
  isChecked: boolean
  checkAllItem?: boolean
  onToggleOnly: (value: number) => void
  onToggle: (value: number, isChecked: boolean) => void
}

const CheckOnlyButton = styled.div<{ checkAllItem: boolean | undefined }>`
  opacity: 0;
  right: 15px;
  bottom: 100%;
  cursor: pointer;
  line-height: 36px;
  position: absolute;
  transition: all 0.2s;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  display: ${({ checkAllItem }) => (checkAllItem ? 'none' : 'block')};

  &:hover {
    color: ${({ theme }) => theme.colors.hoveredBuyButton};
  }
`

const Root = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  padding: 0 15px;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  transition: bottom 0.15s ease-out, opacity 0.15s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.currencyHover};

    & > ${CheckOnlyButton} {
      bottom: 0;
      opacity: 1;
    }
  }
`

const CheckboxMask = styled.div`
  width: 19px;
  height: 19px;
  cursor: pointer;
  overflow: hidden;
  margin-right: 11px;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: center top -7px;
  transition: background-position 0.2s, border 0.2s ease-in-out;

  background-image: url(${activeArrow});
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
`

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  width: 19px;
  height: 19px;
  display: none;
  margin-right: 11px;
  position: relative;
  transition: all 0.2s;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:checked + ${CheckboxMask} {
    background-repeat: no-repeat;
    background-position: center center;

    background-image: url(${activeArrow});
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    background-color: ${({ theme }) => theme.colors.currencyHover};
  }

  &:disabled + ${CheckboxMask} {
    cursor: default;
    background-repeat: no-repeat;
    background-position: center top -7px;

    background-image: url(${disabledArrow});
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  }

  &:checked:disabled + ${CheckboxMask} {
    cursor: default;
    background-repeat: no-repeat;
    background-position: center center;

    background-image: url(${disabledArrow});
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  }
`

const Text = styled.span`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`

export const CheckboxItem: React.FC<TProps> = ({
  text,
  value,
  disabled,
  onToggle,
  isChecked,
  onToggleOnly,
  checkAllItem
}): JSX.Element => (
  <Root>
    <Checkbox
      value={value}
      checked={isChecked}
      disabled={disabled}
      onChange={() => onToggle(value, isChecked)}
    />
    <CheckboxMask onClick={() => onToggle(value, isChecked)} />
    <Text>{text}</Text>
    <CheckOnlyButton
      checkAllItem={checkAllItem}
      onClick={() => onToggleOnly(value)}
    >
      {i18n.onlyBtnText}
    </CheckOnlyButton>
  </Root>
)
