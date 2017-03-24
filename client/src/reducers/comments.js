import { combineReducers } from 'redux'
import { commentsTypes } from '../constants'

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

function comments(state = [], action) {
  switch (action.type) {
    case commentsTypes.FETCH_COMMENTS_SUCCESS:
      return action.payload.comments
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
    case commentsTypes.CREATE_COMMENT_SUCCESS:
      return [...state, action.payload.comment]
    default:
      return state
  }
}

export default combineReducers({
  comments,
  isFetching
})

export function getAllComments({ comments }) {
  return comments
}

export function getFetchingStatus({ isFetching }) {
  return isFetching
}
