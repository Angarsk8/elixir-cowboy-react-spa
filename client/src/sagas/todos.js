import { takeLatest, put, call } from 'redux-saga/effects'
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
    yield put(todosActions.updateTodoFailure())
  }
}

function* deleteTodo(action) {
  try {
    yield call(todosApi.deleteTodo, action.payload)
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
      call(todosApi.updateTodo, { id, changes: { completed } })
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
      call(todosApi.deleteTodo, { id })
    )

    yield put(todosActions.deleteAllTodos())
  } catch (e) {
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
  yield takeLatest(todosTypes.CREATE_TODO_REQUEST, createTodo)
}

export function* watchUpdateTodo() {
  yield takeLatest(todosTypes.UPDATE_TODO_REQUEST, updateTodo)
}

export function* watchDeleteTodo() {
  yield takeLatest(todosTypes.DELETE_TODO_REQUEST, deleteTodo)
}

export function* watchToggleAllTodos() {
  yield takeLatest(todosTypes.TOGGLE_ALL_TODOS, toggleAllTodos)
}

export function* watchDeleteAllTodos() {
  yield takeLatest(todosTypes.DELETE_ALL_TODOS_REQUEST, deleteAllTodos)
}
