import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import { todosActions } from '../actions'
import { todosTypes } from '../constants'
import { todosApi } from '../api'

function* fetchTodos(action) {
  try {
    const response = yield call(todosApi.getTodos)
    yield put(todosActions.setTodos(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(todosActions.fetchTodosFailure())
  }
}

function* createTodo(action) {
  try {
    const response = yield call(todosApi.createTodo, action.payload)
    yield put(todosActions.setTodo(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(todosActions.createTodoFailure())
  }
}

function* updateTodo(action) {
  try {
    const response = yield call(todosApi.updateTodo, action.payload)
    yield put(todosActions.updateTodo(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(todosActions.updateTodoFailure(action.payload.id))
  }
}

function* deleteTodo(action) {
  try {
    yield call(todosApi.deleteTodo, action.payload)
    yield put(todosActions.deleteTodo(action.payload.id))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(todosActions.deleteTodoFailure(action.payload.id))
  }
}

function* toggleAllTodos(action) {
  try {
    const { ids, completed } = action.payload
    const responses = yield ids.map(id =>
      call(todosApi.updateTodo, { id, changes: { completed } })
    )
    const todos = responses.map(resp => resp.data)
    yield put(todosActions.toggleAllTodos(todos))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(todosActions.toggleAllTodosFailure())
  }
}

function* deleteAllTodos(action) {
  try {
    yield action.payload.ids.map(id =>
      call(todosApi.deleteTodo, { id })
    )
    yield put(todosActions.deleteAllTodos())
  } catch (e) {
    yield put(todosActions.deleteAllTodosFailure())
    console.error(`${action.type} failed: ${e.message}`)
  }
}

export default {
  watchFetchTodos,
  watchCreateTodo,
  watchUpdateTodo,
  watchDeleteTodo,
  watchToggleAllTodos,
  watchDeleteAllTodos
}

export function* watchFetchTodos() {
  yield takeLatest(todosTypes.FETCH_TODOS_REQUEST, fetchTodos)
}

export function* watchCreateTodo() {
  yield takeEvery(todosTypes.CREATE_TODO_REQUEST, createTodo)
}

export function* watchUpdateTodo() {
  yield takeEvery(todosTypes.UPDATE_TODO_REQUEST, updateTodo)
}

export function* watchDeleteTodo() {
  yield takeEvery(todosTypes.DELETE_TODO_REQUEST, deleteTodo)
}

export function* watchToggleAllTodos() {
  yield takeEvery(todosTypes.TOGGLE_ALL_TODOS_REQUEST, toggleAllTodos)
}

export function* watchDeleteAllTodos() {
  yield takeEvery(todosTypes.DELETE_ALL_TODOS_REQUEST, deleteAllTodos)
}
