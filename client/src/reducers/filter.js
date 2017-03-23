import { combineReducers } from 'redux'
import * as types from '../constants'

function filter(state = 'ALL', action) {
  switch (action.type) {
    case types.SET_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default combineReducers({
  filter
})

export function getFilter({ filter }) {
  return filter
}
