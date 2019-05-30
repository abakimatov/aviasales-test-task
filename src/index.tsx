import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'

import theme, { GlobalStyles } from 'theme'

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Fragment>,
  document.getElementById('root')
)
