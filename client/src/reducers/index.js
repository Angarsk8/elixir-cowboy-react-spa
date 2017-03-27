import { combineReducers } from 'redux'
import todos, * as todosSelectors from './todos'
import filter, * as filterSelectors from './filter'
import comments, * as commentsSelectors from './comments'
import user, * as userSelectors from './user'

const rootReducer = combineReducers({
  todos,
  filter,
  comments,
  user
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

export function getCreatingStatus({ todos }) {
  return todosSelectors.getCreatingStatus(todos)
}

export function getSelectedTodoId({ todos }) {
  return todosSelectors.getSelectedTodoId(todos)
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

export function getAllFilters({ filter }) {
  return filterSelectors.getAllFilters(filter)
}

export function getAllComments({ comments }) {
  return commentsSelectors.getAllComments(comments)
}

export function getCommentsFetchingStatus({ comments }) {
  return commentsSelectors.getFetchingStatus(comments)
}

export function getCommentsCreatingStatus({ comments }) {
  return commentsSelectors.getCreatingStatus(comments)
}

export function getCurrentUser({ user }) {
  return userSelectors.getCurrentUser(user)
}
