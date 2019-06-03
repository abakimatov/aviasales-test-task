import React from 'react'

import { getStopPluralForm } from 'utils/pluralForm'

it('should be пересадка', () => {
  expect(getStopPluralForm(1)).toBe('пересадка')
})

it('should be пересадка', () => {
  expect(getStopPluralForm(21)).toBe('пересадка')
})

it('should be пересадки', () => {
  expect(getStopPluralForm(2)).toBe('пересадки')
})

it('should be пересадки', () => {
  expect(getStopPluralForm(23)).toBe('пересадки')
})

it('should be пересадок', () => {
  expect(getStopPluralForm(5)).toBe('пересадок')
})

it('should be пересадок', () => {
  expect(getStopPluralForm(107)).toBe('пересадок')
})
