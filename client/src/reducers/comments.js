import { combineReducers } from 'redux'
import { commentsTypes, todosTypes } from '../constants'
import { putProcessingStatus } from './helpers'

function isFetching(state = false, action) {
  switch (action.type) {
    case commentsTypes.FETCH_COMMENTS_REQUEST:
      return true
    case commentsTypes.FETCH_COMMENTS_SUCCESS:
    case commentsTypes.FETCH_COMMENTS_FAILURE:
      return false
    default:
      return state
  }
}

function isCreating(state = false, action) {
  switch (action.type) {
    case commentsTypes.CREATE_COMMENT_REQUEST:
      return true
    case commentsTypes.CREATE_COMMENT_SUCCESS:
    case commentsTypes.CREATE_COMMENT_FAILURE:
      return false
    default:
      return state
  }
}

function comments(state = [], action) {
  switch (action.type) {
    case commentsTypes.FETCH_COMMENTS_SUCCESS:
      return action.payload.comments
    case commentsTypes.CREATE_COMMENT_SUCCESS:
      return [...state, action.payload.comment]
    case commentsTypes.UPDATE_COMMENT_SUCCESS:
      const { comment } = action.payload
      return state.map(_comment => {
        if (_comment.id === comment.id) {
          return comment
        }
        return _comment
      })
    case commentsTypes.DELETE_COMMENT_SUCCESS:
      return state.filter(comment =>
        comment.id !== action.payload.id
      )
    case todosTypes.DELETE_TODO_SUCCESS:
    case todosTypes.DELETE_ALL_TODOS_SUCCESS:
      return []
    default:
      return state
  }
}

function updating(state = [], action) {
  switch (action.type) {
    case commentsTypes.UPDATE_COMMENT_REQUEST:
      return [...state, action.payload.id]
    case commentsTypes.UPDATE_COMMENT_SUCCESS:
      return state.filter(id => id !== action.payload.comment.id)
    case commentsTypes.UPDATE_COMMENT_FAILURE:
      return state.filter(id => id !== action.payload.id)
    default:
      return state
  }
}

function deleting(state = [], action) {
  switch (action.type) {
    case commentsTypes.DELETE_COMMENT_REQUEST:
      return [...state, action.payload.id]
    case commentsTypes.DELETE_COMMENT_SUCCESS:
    case commentsTypes.DELETE_COMMENT_FAILURE:
      return state.filter(id => id !== action.payload.id)
    default:
      return state
  }
}

export default combineReducers({
  comments,
  isFetching,
  isCreating,
  updating,
  deleting
})

export function getAllComments({ comments, updating, deleting }) {
  return putProcessingStatus(comments, updating, deleting)
}

export function getFetchingStatus({ isFetching }) {
  return isFetching
}

export function getCreatingStatus({ isCreating }) {
  return isCreating
}
