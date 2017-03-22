import { combineReducers } from 'redux'
import * as types from '../constants'

function isFetching(state = false, action) {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST:
      return true
    case types.FETCH_TODOS_SUCCESS:
    case types.FETCH_TODOS_FAILURE:
      return false
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case types.FETCH_TODOS_SUCCESS:
      return action.payload.todos
    default:
      return state
  }
}

export default combineReducers({
  todos,
  isFetching,
})

export function getAllTodos({ todos }) {
  return todos
}
