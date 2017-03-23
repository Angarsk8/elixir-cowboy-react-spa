import { combineReducers } from 'redux'
import todos, * as todosSelectors from './todos'
import filter, * as filterSelectors from './filter'

const rootReducer = combineReducers({
  todos,
  filter
})

export default rootReducer

export function getAllTodos({ todos, filter }) {
  return todosSelectors.getAllTodos(todos, filter)
}

export function getAllTodosIds({ todos, filter }) {
  return todosSelectors.getAllTodosIds(todos, filter)
}

export function getFetchingStatus({ todos }) {
  return todosSelectors.getFetchingStatus(todos)
}

export function getSelectedTodo({ todos }) {
  return todosSelectors.getSelectedTodo(todos)
}

export function getMarkedStatus({ todos }) {
  return todosSelectors.getMarkedStatus(todos)
}

export function getFilter({ filter }) {
  return filterSelectors.getFilter(filter)
}
