import {
  apiURL,
  httpGet,
  httpPost,
  httpUpdate,
  httpDelete
} from '../utils/http'

export default {
  getComments,
  createComment,
  deleteComment,
  updateComment
}

export function getComments({ todoId }) {
  return httpGet(`${apiURL}/todos/${todoId}/comments`)
}

export function createComment({ todoId, comment }) {
  return httpPost(`${apiURL}/todos/${todoId}/comments`, comment)
}

export function deleteComment({ todoId, commentId }) {
  return httpDelete(`${apiURL}/todos/${todoId}/comments/${commentId}`)
}

export function updateComment({ todoId, commentId, changes }) {
  return httpUpdate(`${apiURL}/todos/${todoId}/comments/${commentId}`, changes)
}
