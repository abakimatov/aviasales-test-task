import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Spinner: React.FC = (): JSX.Element => (
  <Root>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1"
      width="160"
      height="20"
      viewBox="0 0 128 16"
    >
      <rect width="100%" height="100%" fill="#F3F7FA" />
      <path
        fill="#a2d3fa"
        fillOpacity="0.42"
        d="M6.4 4.8A3.2 3.2 0 1 1 3.2 8a3.2 3.2 0 0 1 3.2-3.2zm12.8 0A3.2 3.2 0 1 1 16 8a3.2 3.2 0 0 1 3.2-3.2zm12.8 0A3.2 3.2 0 1 1 28.8 8 3.2 3.2 0 0 1 32 4.8zm12.8 0A3.2 3.2 0 1 1 41.6 8a3.2 3.2 0 0 1 3.2-3.2zm12.8 0A3.2 3.2 0 1 1 54.4 8a3.2 3.2 0 0 1 3.2-3.2zm12.8 0A3.2 3.2 0 1 1 67.2 8a3.2 3.2 0 0 1 3.2-3.2zm12.8 0A3.2 3.2 0 1 1 80 8a3.2 3.2 0 0 1 3.2-3.2zm12.8 0A3.2 3.2 0 1 1 92.8 8 3.2 3.2 0 0 1 96 4.8zm12.8 0a3.2 3.2 0 1 1-3.2 3.2 3.2 3.2 0 0 1 3.2-3.2zm12.8 0a3.2 3.2 0 1 1-3.2 3.2 3.2 3.2 0 0 1 3.2-3.2z"
      />
      <g>
        <path
          fill="#2196f3"
          d="M-42.7 3.84A4.16 4.16 0 0 1-38.54 8a4.16 4.16 0 0 1-4.16 4.16A4.16 4.16 0 0 1-46.86 8a4.16 4.16 0 0 1 4.16-4.16zm12.8-.64A4.8 4.8 0 0 1-25.1 8a4.8 4.8 0 0 1-4.8 4.8A4.8 4.8 0 0 1-34.7 8a4.8 4.8 0 0 1 4.8-4.8zm12.8-.64A5.44 5.44 0 0 1-11.66 8a5.44 5.44 0 0 1-5.44 5.44A5.44 5.44 0 0 1-22.54 8a5.44 5.44 0 0 1 5.44-5.44z"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0"
          calcMode="discrete"
          dur="1170ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  </Root>
)
