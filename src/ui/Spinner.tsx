import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const animate = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const SpinnerBody = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    ${css`
      animation: ${animate} 1.2s linear infinite;
    `};
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: ${({ theme }) => `5px solid ${theme.colors.primary}`};
    border-color: ${({ theme }) =>
      `${theme.colors.primary} transparent ${
        theme.colors.primary
      } transparent`};
  }
`

export const Spinner: React.FC = (): JSX.Element => (
  <Root>
    <SpinnerBody />
  </Root>
)
