import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/Index'
import { Provider } from './hyper'
import rootStore from './stores/root'

console.log('rootStore', rootStore)

ReactDOM.render(
  <Provider store={rootStore}>
    <Index />
  </Provider>,
  document.getElementById('root')
)
