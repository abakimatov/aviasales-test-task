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
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
`

const SpinnerBody = styled.div`
  width: 64px;
  height: 64px;
  display: inline-block;

  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;

    ${css`
      animation: ${animate} 1.2s linear infinite;
    `};
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
