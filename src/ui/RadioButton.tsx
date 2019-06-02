import React from 'react'
import styled from 'styled-components'

type TProps = {
  name: string
  value: string
  onToggle: (value: string) => void
  checked: boolean
}

const Root = styled.label<{ checked: boolean }>`
  position: relative;
  flex: 1;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  border: ${({ theme, checked }) =>
    checked
      ? `1px solid ${theme.colors.primary}`
      : `1px solid ${theme.colors.border}`};
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.white};

  &:hover {
    ${({ theme, checked }) =>
      !checked && `background-color: ${theme.colors.currencyHover}`}
    ${({ theme, checked }) =>
      !checked &&
      `border: 1px solid ${theme.colors.primaryBorder}`}
    
    & span {
      ${({ theme, checked }) => !checked && `color: ${theme.colors.primary}`};
    }
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }

  &:not(:last-child) {
    border-right-width: 0;
  }

  & span {
  }
`

const HiddenRadio = styled.input.attrs({
  type: 'radio'
})`
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 0;
  width: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
  }
`

const Text = styled.span<{ checked: boolean }>`
  line-height: 22px;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme, checked }) =>
    checked ? theme.colors.white : theme.colors.primary};
`

export const RadioButton: React.FC<TProps> = ({
  onToggle,
  value,
  name,
  checked
}): JSX.Element => {
  return (
    <Root htmlFor={value} checked={checked}>
      <HiddenRadio
        onChange={() => onToggle(value)}
        id={value}
        value={value}
        name={name}
        checked={checked}
      />
      <Text checked={checked}>{value}</Text>
    </Root>
  )
}
