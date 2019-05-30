import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-right: 10px;
`

const Content = styled.section`
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.pageBackground};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radius};
`

export const Filters: React.FC = () => {
  return (
    <Root>
      <Content>
        <h1>Filters</h1>
      </Content>
    </Root>
  )
}
