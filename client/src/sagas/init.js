import { put, call } from 'redux-saga/effects'
import { getAuthToken, setAuthToken } from '../utils/http'
import { userActions, todosActions } from '../actions'
import { userApi } from '../api'

function* initialSetup() {
  try {
    const token = yield call(getAuthToken)
    if (token) {
      const response = yield call(userApi.getCurrentUser)
      yield put(userActions.setCurrentUser(response.data.user))
    } else {
      const response = yield call(userApi.createUser)
      const { jwt, user } = response.data
      yield call(setAuthToken, jwt)
      yield put(userActions.setUser(user))
    }
    yield put(todosActions.fetchTodosRequest())
  } catch (e) {
    console.error(`Initial setup failed: ${e.message}`)
  }
}

export default initialSetup
