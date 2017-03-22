import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from '../components/Home'

function routes() {
  return (
    <Route path="/">
      <IndexRoute
        component={Home}
      />
    </Route>
  )
}

export default routes
