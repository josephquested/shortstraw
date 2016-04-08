global.Ω = require('lomega')

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <App store={store} appState={store.getState()} />,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()
