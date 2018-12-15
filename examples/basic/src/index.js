import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/Index'
import { Provider } from './hyper'

ReactDOM.render(
  <Provider store={{ color: 'red' }}>
    <Index />
  </Provider>,
  document.getElementById('root')
)
