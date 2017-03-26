import { combineReducers } from 'redux'
import { userTypes } from '../constants'

function user(state = {}, action) {
  switch (action.type) {
    case userTypes.CREATE_USER_SUCCESS:
    case userTypes.FETCH_USER_SUCCESS:
      return action.payload.user
    default:
      return state
  }
}

export default combineReducers({
  user
})

export function getCurrentUser({ user }) {
  return user
}
