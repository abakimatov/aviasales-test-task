import React from 'react'
import styled from 'styled-components'

type TProps = {
  text: string
}

const Title = styled.span`
  line-height: 19px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export const FiltersTitle: React.FC<TProps> = ({ text }): JSX.Element => (
  <Title>{text}</Title>
)
