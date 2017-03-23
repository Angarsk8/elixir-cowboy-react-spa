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
    case types.UPDATE_TODO_SUCCESS:
      const { todo } = action.payload
      return state.map(_todo => {
        if (_todo.id === todo.id) {
          return todo
        }
        return _todo
      })
    case types.DELETE_TODO_SUCCESS:
      return state.filter(todo =>
        todo.id !== action.payload.id
      )
    case types.CREATE_TODO_SUCCESS:
      return [action.payload.todo, ...state]
    case types.DELETE_ALL_TODOS_SUCCESS:
      return []
    default:
      return state
  }
}

function selectedTodoId(state = -1, action) {
  switch (action.type) {
    case types.SELECT_TODO:
      return action.payload.id
    case types.DELETE_TODO_SUCCESS:
      return state === action.payload.id ? -1 : state
    case types.DELETE_ALL_TODOS_SUCCESS:
      return -1
    default:
      return state
  }
}

export default combineReducers({
  todos,
  isFetching,
  selectedTodoId
})

export function getAllTodos({ todos }, { filter }) {
  switch (filter) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

export function getAllTodosIds({ todos }) {
  return todos.map(todo => todo.id)
}

export function getFetchingStatus({ isFetching }) {
  return isFetching
}

export function getSelectedTodo({ todos, selectedTodoId }) {
  return todos.find(todo => todo.id === selectedTodoId)
}

export function getMarkedStatus({ todos }) {
  return todos.every(todo => todo.completed)
}
