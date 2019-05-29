import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import { Layout } from 'ui'

import { Filters } from './components/Filters'
import { List } from './components/List'

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Filters />
        <List />
      </Layout>
    </ThemeProvider>
  )
}

export default App
