import * as fx from 'redux-saga/effects'
import { todosActions } from '../actions'
import * as types from '../constants'
import * as Api from '../api'
import { httpGet, apiURL } from '../utils/http'

function* fetchTodos(action) {
  try {
    const response = yield fx.call(httpGet, `${apiURL}/todos`)
    console.log(response);
    yield fx.put(todosActions.setTodos(response.data))
  } catch (e) {
    console.log(`Fetching jobs failed: ${e}`)
    yield fx.put(todosActions.fetchTodosFailure())
  }
}

function* watchFetchTodos() {
  yield fx.takeLatest(types.FETCH_TODOS_REQUEST, fetchTodos)
}

export default function* rootSaga() {
  yield [
    watchFetchTodos()
  ]
}
