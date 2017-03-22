import { createStore, applyMiddleware, compose } from 'redux'
import createlogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import sagas from '../sagas'

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  let middlewares = [sagaMiddleware]
  let composeEnhancers = compose

  if (process.env.NODE_ENV !== 'production') {
    const logger = createlogger({
      predicate: (getState, action) => (
        action.type !== '@@router/LOCATION_CHANGE'
      )
    })
    middlewares = [ ...middlewares, logger ]
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }


  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  sagaMiddleware.run(sagas)

  return store
}
