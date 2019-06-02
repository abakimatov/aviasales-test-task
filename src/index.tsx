import 'react-app-polyfill/ie11'
import 'react-app-polyfill/ie9'
import 'core-js/features/array/includes'
import 'core-js/features/map'
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
