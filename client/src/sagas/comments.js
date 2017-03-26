import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import { commentsActions } from '../actions'
import { commentsTypes } from '../constants'
import { commentsApi } from '../api'

function* fetchComments(action) {
  try {
    const response = yield call(commentsApi.getComments, action.payload)
    yield put(commentsActions.setComments(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(commentsActions.fetchCommentsFailure())
  }
}

function* createComment(action) {
  try {
    const response = yield call(commentsApi.createComment, action.payload)
    yield put(commentsActions.setComment(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(commentsActions.createCommentFailure())
  }
}

function* deleteComment(action) {
  try {
    yield call(commentsApi.deleteComment, action.payload)
    yield put(commentsActions.deleteComment(action.payload.commentId))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(commentsActions.deleteCommentFailure())
  }
}

function* updateComment(action) {
  try {
    const response = yield call(commentsApi.updateComment, action.payload)
    yield put(commentsActions.updateComment(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(commentsActions.updateCommentFailure())
  }
}

export default {
  watchFetchComments,
  watchCreateComment,
  watchDeleteComment,
  watchUpdateComment
}

export function* watchFetchComments() {
  yield takeLatest(commentsTypes.FETCH_COMMENTS_REQUEST, fetchComments)
}

export function* watchCreateComment() {
  yield takeEvery(commentsTypes.CREATE_COMMENT_REQUEST, createComment)
}

export function* watchDeleteComment() {
  yield takeEvery(commentsTypes.DELETE_COMMENT_REQUEST, deleteComment)
}

export function* watchUpdateComment() {
  yield takeEvery(commentsTypes.UPDATE_COMMENT_REQUEST, updateComment)
}
