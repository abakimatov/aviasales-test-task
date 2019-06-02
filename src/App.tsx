import React from 'react'

import { Layout, Spinner } from 'ui'
import { useFetch } from 'core/dataHook'

import { Main } from './components/Main'

const App: React.FC = (): JSX.Element => {
  const { data, loading } = useFetch()
  return (
    <Layout>
      {loading && <Spinner />}
      {!loading && <Main {...data} />}
    </Layout>
  )
}

export default App
