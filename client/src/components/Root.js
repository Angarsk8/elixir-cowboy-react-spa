import React from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { configureStore } from '../store'
import routes from '../routes'

const store = configureStore()

function Root(){
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes()}
      </Router>
    </Provider>
  )
}
export default Root
