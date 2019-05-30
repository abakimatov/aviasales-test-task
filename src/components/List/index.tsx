import React from 'react'
import styled from 'styled-components'

const Root = styled.ul`
  grid-column-start: 2;
  grid-column-end: 2;

  width: 100%;
  padding-left: 10px;
  list-style: none;
  margin: 0;
`

export const List: React.FC = () => {
  return (
    <Root>
      <h1>List</h1>
    </Root>
  )
}
