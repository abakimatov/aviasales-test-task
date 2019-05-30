import React from 'react'

import { Layout, Spinner } from 'ui'
import { useFetch } from 'core/dataHook'

import { Filters } from './components/Filters'
import { List } from './components/List'

const App: React.FC = (): JSX.Element => {
  const { data, loading } = useFetch()
  console.log(loading)
  return (
    <Layout>
      {loading && <Spinner />} <Filters />
      <List />
    </Layout>
  )
}

export default App
