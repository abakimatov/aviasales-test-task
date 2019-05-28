import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { GlobalStyles } from 'theme'

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById('root')
)
