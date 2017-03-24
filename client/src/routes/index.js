import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'

function routes() {
  return (
    <Route path="/">
      <IndexRoute
        component={App}
      />
    </Route>
  )
}

export default routes
