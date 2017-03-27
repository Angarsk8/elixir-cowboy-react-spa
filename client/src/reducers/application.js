import { combineReducers } from 'redux'
import { appTypes } from '../constants'

function initializingApp(state = false, action) {
  switch (action.type) {
    case appTypes.INITIALIZE_APP_REQUEST:
      return true
    case appTypes.INITIALIZE_APP_SUCCESS:
    case appTypes.INITIALIZE_APP_FAILURE:
      return false
    default:
      return state
  }
}

export default combineReducers({
  initializingApp
})

export function getInitializingStatus({ initializingApp }) {
  return initializingApp
}
