import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import { Layout, Spinner } from 'ui'

import { Filters } from './components/Filters'
import { List } from './components/List'

const App: React.FC = (): JSX.Element => {
  const loading: boolean = false
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {loading && <Spinner />} <Filters />
        <List />
      </Layout>
    </ThemeProvider>
  )
}

export default App
