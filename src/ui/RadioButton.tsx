import React from 'react'
import styled from 'styled-components'

import { media } from 'theme'

type TProps = {
  name: string
  value: string
  checked: boolean
  onToggle: (value: string) => void
}

const Root = styled.label<{ checked: boolean }>`
  flex: 1;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  transition: all 0.2s;
  justify-content: center;

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

  ${media.wide`
    flex: 0;
    width: 50px;
  `};

  &:first-child {
    border-radius: 5px 0 0 5px;

    ${media.wide`
      border-radius: 5px 5px 0 0;
    `};
  }

  &:last-child {
    border-radius: 0 5px 5px 0;

    ${media.wide`
      border-radius: 0 0 5px 5px;
    `};
  }

  &:not(:last-child) {
    border-right-width: 0;

    ${media.wide`
      border-right-width: 1px;
      border-bottom-width: 0;
    `}
  }
`

const HiddenRadio = styled.input.attrs({
  type: 'radio'
})`
  width: 0;
  height: 0;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:before {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    cursor: pointer;
    position: absolute;
  }
`

const Text = styled.span<{ checked: boolean }>`
  line-height: 22px;
  letter-spacing: 0.5px;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme, checked }) =>
    checked ? theme.colors.white : theme.colors.primary};
`

export const RadioButton: React.FC<TProps> = ({
  name,
  value,
  checked,
  onToggle
}): JSX.Element => {
  return (
    <Root htmlFor={value} checked={checked}>
      <HiddenRadio
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onToggle(value)}
      />
      <Text checked={checked}>{value}</Text>
    </Root>
  )
}
