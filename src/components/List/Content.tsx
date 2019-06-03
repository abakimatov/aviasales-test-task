import React from 'react'
import styled, { css } from 'styled-components'

import { media } from 'theme'
import mockLogo from 'ui/Img/mockLogo.png'
import { formatPrice } from 'utils/formatPrice'

import { i18n } from './i18n'
import { Currencies } from '../../constants'

type TProps = {
  price: number
  currency: string
}

const Root = styled.div`
  width: 200px;
  display: flex;
  height: 161px;
  padding: 25px 20px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  border-right: ${({ theme }) => `1px solid ${theme.colors.ticketDivider}`};

  ${media.desktop`
    height: 237px;
  `};
  ${media.tablet`
    width: 100%;
    height: 100px;
    flex-wrap: wrap;
    border-right: none;
    padding: 10px 20px;
    flex-direction: row;
  `};
  ${media.phone`
    height: initial;
    flex-direction: column;
  `};
`

const ProviderLogo = styled.img`
  width: 120px;
  height: 35px;
`

const Price = styled.span<{ currency: string }>`
  &:before {
    ${({ currency }) =>
      currency === Currencies.USD &&
      css`
        content: '\\0024';
      `}

    ${({ currency }) =>
      currency === Currencies.EUR &&
      css`
        content: '\\20AC';
      `};
  }

  &:after {
    ${({ currency }) =>
      currency === Currencies.RUB &&
      css`
        content: '\\20BD';
        margin-left: 1px;
      `};
  }
`

const BuyButton = styled.button`
  width: 160px;
  height: 56px;
  border: none;
  padding: 6px 0;
  cursor: pointer;
  transition: all 0.2s;

  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadows.buyButton};
  background-color: ${({ theme }) => theme.colors.buyButton};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hoveredBuyButton};
    background-color: ${({ theme }) => theme.colors.hoveredBuyButton};
  }

  ${media.phone`
    width: 100%;
    margin-top: 10px;
  `};
`

const ButtonText = styled.span`
  line-height: 22px;
  text-align: center;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[4]};
`

const BtnDivider = styled.br`
  ${media.phone`
    display: none;
  `};
`

export const Content: React.FC<TProps> = ({ price, currency }): JSX.Element => {
  const prettyLookPrice = formatPrice(price)
  return (
    <Root>
      <ProviderLogo src={mockLogo} alt="provider logo" />
      <BuyButton>
        <ButtonText>
          {i18n.buy}
          <BtnDivider />
          {i18n.for} <Price currency={currency}>{prettyLookPrice}</Price>
        </ButtonText>
      </BuyButton>
    </Root>
  )
}
