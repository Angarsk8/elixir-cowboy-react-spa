import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import { todosActions } from '../actions'
import * as types from '../constants'
import * as Api from '../api'

function* fetchTodos(action) {
  try {
    const response = yield call(Api.getTodos)
    yield put(todosActions.setTodos(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(todosActions.fetchTodosFailure())
  }
}

function* createTodo(action) {
  try {
    const response = yield call(Api.createTodo, action.payload)
    yield put(todosActions.setTodo(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(todosActions.createTodoFailure())
  }
}

function* updateTodo(action) {
  try {
    const response = yield call(Api.updateTodo, action.payload)
    yield put(todosActions.updateTodo(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(todosActions.fetchTodosFailure())
  }
}

function* deleteTodo(action) {
  try {
    yield call(Api.deleteTodo, action.payload)
    yield put(todosActions.deleteTodo(action.payload.id))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(todosActions.deleteTodoFailure())
  }
}

function* toggleAllTodos(action) {
  try {
    const { ids, completed } = action.payload
    const responses = yield ids.map(id =>
      call(Api.updateTodo, { id, changes: { completed } })
    )
    const todos = responses.map(resp => resp.data)
    yield put(todosActions.setTodos(todos))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
  }
}

function* deleteAllTodos(action) {
  try {
    const { ids } = action.payload
    const responses = yield ids.map(id =>
      call(Api.deleteTodo, { id })
    )

    yield put(todosActions.deleteAllTodos())
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
  }
}

function* watchFetchTodos() {
  yield takeLatest(types.FETCH_TODOS_REQUEST, fetchTodos)
}

function* watchCreateTodo() {
  yield takeLatest(types.CREATE_TODO_REQUEST, createTodo)
}

function* watchUpdateTodo() {
  yield takeLatest(types.UPDATE_TODO_REQUEST, updateTodo)
}

function* watchDeleteTodo() {
  yield takeLatest(types.DELETE_TODO_REQUEST, deleteTodo)
}

function* watchToggleAllTodos() {
  yield takeLatest(types.TOGGLE_ALL_TODOS, toggleAllTodos)
}

function* watchDeleteAllTodos() {
  yield takeLatest(types.DELETE_ALL_TODOS_REQUEST, deleteAllTodos)
}

export default function* rootSaga() {
  yield [
    watchFetchTodos(),
    watchCreateTodo(),
    watchUpdateTodo(),
    watchDeleteTodo(),
    watchToggleAllTodos(),
    watchDeleteAllTodos()
  ]
}
