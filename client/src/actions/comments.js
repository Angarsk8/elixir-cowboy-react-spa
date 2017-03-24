import { commentsTypes } from '../constants'

export default {
  fetchCommentsRequest,
  setComments,
  fetchCommentsFailure,
  createCommentRequest,
  setComment,
  createCommentFailure,
  deleteCommentRequest,
  deleteComment,
  deleteCommentFailure,
  updateCommentRequest,
  updateComment,
  updateCommentFailure
}

export function fetchCommentsRequest(todoId) {
  return {
    type: commentsTypes.FETCH_COMMENTS_REQUEST,
    payload: {
      todoId
    }
  }
}

export function setComments(comments) {
  return {
    type: commentsTypes.FETCH_COMMENTS_SUCCESS,
    payload: {
      comments
    }
  }
}

export function fetchCommentsFailure() {
  return {
    type: commentsTypes.FETCH_COMMENTS_FAILURE
  }
}

export function createCommentRequest(todoId, comment) {
  return {
    type: commentsTypes.CREATE_COMMENT_REQUEST,
    payload: {
      todoId,
      comment
    }
  }
}

export function setComment(comment) {
  return {
    type: commentsTypes.CREATE_COMMENT_SUCCESS,
    payload: {
      comment
    }
  }
}

export function createCommentFailure() {
  return {
    type: commentsTypes.CREATE_COMMENT_FAILURE
  }
}

export function deleteCommentRequest(todoId, commentId) {
  return {
    type: commentsTypes.DELETE_COMMENT_REQUEST,
    payload: {
      todoId,
      commentId
    }
  }
}

export function deleteComment(id) {
  return {
    type: commentsTypes.DELETE_COMMENT_SUCCESS,
    payload: {
      id
    }
  }
}

export function deleteCommentFailure() {
  return {
    type: commentsTypes.DELETE_COMMENT_FAILURE
  }
}

export function updateCommentRequest(todoId, commentId, changes) {
  return {
    type: commentsTypes.UPDATE_COMMENT_REQUEST,
    payload: {
      todoId,
      commentId,
      changes
    }
  }
}

export function updateComment(comment) {
  return {
    type: commentsTypes.UPDATE_COMMENT_SUCCESS,
    payload: {
      comment
    }
  }
}

export function updateCommentFailure() {
  return {
    type: commentsTypes.UPDATE_COMMENT_FAILURE
  }
}
