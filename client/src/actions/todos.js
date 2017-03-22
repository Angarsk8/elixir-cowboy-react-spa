import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from '../constants'

export default {
  fetchTodosRequest,
  fetchTodosFailure,
  setTodos
}

export function fetchTodosRequest() {
  return {
    type: FETCH_TODOS_REQUEST
  }
}

export function setTodos(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: {
      todos
    }
  }
}

export function fetchTodosFailure() {
  return {
    type: FETCH_TODOS_FAILURE
  }
}
