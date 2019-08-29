/* React */
import React from 'react'
import {render} from 'react-dom'

/* App */
import {Provider} from 'react-redux'
import {store} from './pages/modules'
import App from './App'


/* Render App */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
