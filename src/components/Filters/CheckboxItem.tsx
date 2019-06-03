import React from 'react'
import styled from 'styled-components'

import activeArrow from 'ui/Icons/checkboxActiveArrow.svg'
import disabledArrow from 'ui/Icons/checkboxDisableArrow.svg'

type TProps = {
  isChecked: boolean
  disabled: boolean
  value: any
  text: string
  checkAllItem?: boolean
  onToggle: (value: number, isChecked: boolean) => void
  onToggleOnly: (value: number) => void
}

const CheckOnlyButton = styled.div<{ checkAllItem: boolean | undefined }>`
  transition: all 0.2s;
  position: absolute;
  right: 15px;
  line-height: 36px;
  bottom: 100%;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;

  display: ${({ checkAllItem }) => (checkAllItem ? 'none' : 'block')};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.hoveredBuyButton};
  }
`

const Root = styled.div`
  width: 100%;
  height: 36px;
  padding: 0 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: bottom 0.15s ease-out, opacity 0.15s ease-out;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.colors.currencyHover};

    & > ${CheckOnlyButton} {
      bottom: 0;
      opacity: 1;
    }
  }
`

const CheckboxMask = styled.span`
  height: 19px;
  width: 19px;
  margin-right: 11px;
  overflow: hidden;
  border-radius: 3px;
  background-position: center top -7px;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: background-position 0.2s, border 0.2s ease-in-out;

  background-image: url(${activeArrow});
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
`

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 19px;
  width: 19px;
  margin-right: 11px;
  transition: all 0.2s;
  position: relative;
  display: none;

  &:checked + ${CheckboxMask} {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    background-color: ${({ theme }) => theme.colors.currencyHover};
    background-image: url(${activeArrow});
    background-position: center center;
    background-repeat: no-repeat;
  }

  &:disabled + ${CheckboxMask} {
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
    background-image: url(${disabledArrow});
    background-position: center top -7px;
    background-repeat: no-repeat;
    cursor: default;
  }

  &:checked:disabled + ${CheckboxMask} {
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
    background-color: ${({ theme }) => theme.colors.white};
    background-image: url(${disabledArrow});
    background-position: center center;
    background-repeat: no-repeat;
    cursor: default;
  }
`

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.darkText};
`

export const CheckboxItem: React.FC<TProps> = ({
  isChecked,
  disabled,
  value,
  text,
  onToggle,
  checkAllItem,
  onToggleOnly
}): JSX.Element => (
  <Root>
    <Checkbox
      onChange={() => onToggle(value, isChecked)}
      checked={isChecked}
      disabled={disabled}
      value={value}
    />
    <CheckboxMask onClick={() => onToggle(value, isChecked)} />
    <Text>{text}</Text>
    <CheckOnlyButton
      onClick={() => onToggleOnly(value)}
      checkAllItem={checkAllItem}
    >
      только
    </CheckOnlyButton>
  </Root>
)
