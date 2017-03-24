import { combineReducers } from 'redux'
import { SET_FILTER } from '../constants'

const availableFilters = ['ALL', 'ACTIVE', 'COMPLETED']

function filter(state = availableFilters[0], action) {
  switch (action.type) {
    case SET_FILTER:
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

export function getAllFilters({ filters }) {
  return availableFilters
}
