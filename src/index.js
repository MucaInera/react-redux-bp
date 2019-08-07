import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import App from './containers/App'

import store from './stores'

import {} from './actions'

import 'material-design-icons/iconfont/material-icons.css'

const target = document.querySelector('#root')

const NewProvider = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
}

NewProvider.propTypes = {
  store: PropTypes.object.isRequired
}

ReactDOM.render(
  <NewProvider store={store} />,
  target
)
